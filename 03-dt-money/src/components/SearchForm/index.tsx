import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../contexts/TransactionsContext";

/*
  ** Pattern Names Functions:
  * search - automatic
  * handle - client
  * 
  * Por que um componente renderiza?
  * - Hooks changed (mudou estado, contexto, reducer);
  * - Props changed (mudou propriedades);
  * - Parent rerendered (componente pai renderizou)
  * 
  * Qual o fluxo de renderização?
  * 1. O React recria o HTML da interface daquele componente
  * 2. Compara a versão do HTML com a versão anterior
  * 3. Se mudou alguma coisa, ele reescreve o HTML na tela
  * 
  * Memo:
  * 0. Hooks changed, Props changed (deep comparison)
  * 0.1: Comparar a versão anterior dos hooks e props
  * 0.2: Se mudou algo, ele vai permitir a nova renderização
  * Obs.: extremamente custoso, pode gerar lentidão se usado incorretamente
*/

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (contexto) => {
    return contexto.fetchTransactions;
  });

  const { 
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    // simular uma promessa - 2 segundos
    // await new Promise(resolve => setTimeout(resolve, 2000));

    // console.log(data);

    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

// export const SearchForm = memo(SearchFormComponent);