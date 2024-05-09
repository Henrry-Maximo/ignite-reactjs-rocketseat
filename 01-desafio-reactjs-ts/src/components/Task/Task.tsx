import { Trash } from "phosphor-react";
import { Fragment } from "react";

export const Task = () => {
  return (
    <Fragment>
      <header>
        <div>
          <input type="checkbox" />
          <p>
            Não vou copiar código nenhum já pronto! Vai ser tudo do jeito
            antigo, apenas documentação e oração.
          </p>
        </div>
        <button title="Deletar Tarefa!">
          <Trash size={24} />
        </button>
      </header>
    </Fragment>
  );
};
