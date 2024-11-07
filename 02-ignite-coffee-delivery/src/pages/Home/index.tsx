import { ShoppingCart } from "phosphor-react";
import main from "../../assets/logo-main-coffe-delivery.svg";
import expressTradicional from "../../assets/products/coffe/express-traditional.png";

import box from "../../assets/main-content/box.svg";
import cart from "../../assets/main-content/cart.svg";
import coffe from "../../assets/main-content/coffe.svg";
import timer from "../../assets/main-content/timer.svg";
import {
  Card,
  Container,
  Description,
  LogoIntro,
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

type PropsCoffes = {
  id: number;
  photo: string;
  tags: string[];
  title: string;
  desc: string;
  price: number;
};

const coffes: PropsCoffes[] = [
  {
    id: 1,
    photo: expressTradicional,
    tags: ["TRADICIONAL", "COM LEITE"],
    title: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    price: 10,
  },
  {
    id: 2,
    photo: expressTradicional,
    tags: ["TRADICIONAL"],
    title: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    price: 10,
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
            <label>
              <img src={cart} alt="cart" />
              Compra simples e segura
            </label>
            <label>
              <img src={box} alt="box" />
              Embalagem mantém o café intacto
            </label>
            <label>
              <img src={timer} alt="timer" />
              Entrega rápida e rastreada
            </label>
            <label>
              <img src={coffe} alt="coffe" />O café chega fresquinho até você
            </label>
          </WidgetItems>
        </Wrapper>

        <div>
          <LogoIntro src={main} alt="main-logo" />
        </div>
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
                    <input type="number" min={1} max={10} value={1} />
                    <button>
                      <ShoppingCart />
                    </button>
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
