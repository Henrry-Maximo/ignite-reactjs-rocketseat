import { ShoppingCart } from "phosphor-react";
import main from "../../assets/logo-main-coffe-delivery.svg";

import box from "../../assets/main-content/box.svg";
import cart from "../../assets/main-content/cart.svg";
import coffe from "../../assets/main-content/coffe.svg";
import timer from "../../assets/main-content/timer.svg";
import {
  Container,
  LogoIntro,
  Main,
  Section,
  Summary,
  WidgetItems,
  Wrapper,
} from "./styles";

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

        <div>
          <span>TRADICIONAL</span>

          <div>
            <h3>Expresso Tradicional</h3>
            <label>
              O tradicional café feito com água quente e grãos moídos
            </label>
          </div>

          <div>
            <label>R$ 9,90</label>
            <input />
            <button>
              <ShoppingCart />
            </button>
          </div>
        </div>
      </Section>
    </Container>
  );
}
