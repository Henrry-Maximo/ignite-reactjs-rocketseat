import { ShoppingCart } from "phosphor-react";
import main from "../../assets/logo-main-coffe-delivery.svg";

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
  Section,
  Summary,
  Tags,
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

        <RootCard>
          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>

          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>
          
          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>
          
          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>

          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>

          <Card>
            <div>Foto</div>

            <Tags>
              <span>TRADICIONAL</span>
              {/* <span>COM LEITE</span> */}
            </Tags>

            <Description>
              <h3>Expresso Tradicional</h3>
              <label>
                O tradicional café feito com água quente e grãos moídos
              </label>
            </Description>

            <Price>
              <label>
                R$<span>9,90</span>
              </label>
              <div>
                <input type="number" min={1} max={10} value={1} />
                <button>
                  <ShoppingCart />
                </button>
              </div>
            </Price>
          </Card>
        </RootCard>
      </Section>
    </Container>
  );
}
