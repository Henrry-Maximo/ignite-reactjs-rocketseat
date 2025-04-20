import { Aside, Description, Img, Main, Section } from "./styles";
import imgCoffe from "../../assets/products/coffe/express-traditional.png";

export const NotFound = function () {
  const dataInMemoryAboutCoffes = [
    {
      link: "",
      title: "Café cremoso.",
      price: 5.5,
    },
    {
      link: "",
      title: "Café com leite.",
      price: 7,
    },
  ];

  console.log(dataInMemoryAboutCoffes);

  return (
    <Main>
      <Section>
        <Img src={imgCoffe} />
        <Description>
          <span>Sabor: Café com leite.</span>
          <span>Preço: 7 R$</span>
        </Description>
      </Section>

      <Aside>
        <h1>Página não encontrada!</h1>
        <p>Sempre há um café diferente ao atualizar a página.</p>
      </Aside>
    </Main>
  );
};
