import { ShoppingCartSimple } from "phosphor-react";
import main from "../../assets/logo-main-coffe-delivery.svg";
import expressTradicional from "../../assets/products/coffe/express-traditional.png";

import box from "../../assets/main-content/box.svg";
import cart from "../../assets/main-content/cart.svg";
import coffe from "../../assets/main-content/coffe.svg";
import timer from "../../assets/main-content/timer.svg";
import {
  Button,
  Card,
  Container,
  Description,
  Input,
  Logo,
  Main,
  Price,
  RootCard,
  RootImg,
  Section,
  Summary,
  Tags,
  WidgetItems,
  Wrapper,
} from "./styles";
import MainItem from "../../components/MainItem/MainItem";

type PropsCoffes = {
  id: number;
  photo: string;
  tags: string[];
  title: string;
  desc: string;
  price: string;
};

const coffes: PropsCoffes[] = [
  {
    id: 1,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    price: "9,90",
  },
  {
    id: 2,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: "9,90",
  },
  {
    id: 3,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: 4,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "GELADO"],
    title: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: "9,90",
  },
  {
    id: 5,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    price: "9,90",
  },
  {
    id: 6,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Café com Leite",
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    price: "9,90",
  },
  {
    id: 7,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Latte",
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: "9,90",
  },
  {
    id: 8,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Capuccino",
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: "9,90",
  },
  {
    id: 9,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    price: "9,90",
  },
  {
    id: 10,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: 11,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Macchiato",
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: "9,90",
  },
  {
    id: 12,
    photo: expressTradicional,
    tags: ["ESPECIAL", "COM LEITE"],
    title: "Chocolate Quente",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: "9,90",
  },
  {
    id: 13,
    photo: expressTradicional,
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    title: "Cubano",
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: "9,90",
  },
  {
    id: 14,
    photo: expressTradicional,
    tags: ["ESPECIAL"],
    title: "Havaiano",
    desc: "Bebida adocicada preparada com café e leite de coco",
    price: "9,90",
  },
  {
    id: 15,
    photo: expressTradicional,
    tags: ["ESPECIAL"],
    title: "Árabe",
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    price: "9,90",
  },
  {
    id: 16,
    photo: expressTradicional,
    tags: ["ESPECIAL", "ALCOÓLICO"],
    title: "Irlandês",
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: "9,90",
  },
];

export function Home() {
  return (
    <Container>
      <Main>
        <Wrapper>
          <Summary>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </Summary>

          <WidgetItems>
            <MainItem src={cart} alt="cart" title="Compra simples e segura" />
            <MainItem src={box} alt="box" title="Embalagem mantém o café intacto" />
            <MainItem src={timer} alt="timer" title="Entrega rápida e rastreada" />
            <MainItem src={coffe} alt="coffe" title="O café chega fresquinho até você" />
          </WidgetItems>
        </Wrapper>

        <Logo src={main} alt="main-logo" />
      </Main>

      <Section>
        <h2>Nossos cafés</h2>

        <RootCard>
          {coffes.map((line) => {
            return (
              <Card key={line.id}>
                <RootImg>
                  <img src={line.photo} />
                </RootImg>

                <Tags>
                  {line.tags &&
                    line.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                </Tags>

                <Description>
                  <h3>{line.title}</h3>
                  <label>{line.desc}</label>
                </Description>

                <Price>
                  <label>
                    R$<span>{line.price}</span>
                  </label>
                  <div>
                    <Input type="number" min={1} max={10} />
                    <Button>
                      <ShoppingCartSimple />
                    </Button>
                  </div>
                </Price>
              </Card>
            );
          })}
        </RootCard>
      </Section>
    </Container>
  );
}
