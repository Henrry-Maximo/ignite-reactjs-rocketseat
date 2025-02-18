import { Coffee, CurrencyDollar, MapPinLine } from "phosphor-react";
import { Aside, Footer, Form, Main, Section, SectionChoice } from "./styles";

export function CheckOut() {
  return (
    <Main>
      {/* endereço + pagamento */}
      <Form>
        <h3>Complete seu pedido</h3>

        <Section>
          <div>
            <MapPinLine />
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div>
              <input placeholder="90250-440" />
            </div>

            <div>
              <input placeholder="Rua João Daniel Martinelli" />
            </div>

            <div>
              <input placeholder="102" />
            </div>

            <div>
              <input placeholder="Complemento" />
            </div>
            <div>
              <input placeholder="Ferrapos" />
            </div>
            <div>
              <input placeholder="Porto Alegre" />
            </div>
            <div>
              <input placeholder="RS" />
            </div>
          </form>
        </Section>

        <Footer>
          <div>
            <CurrencyDollar />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div>
            <button type="button">CARTÃO DE CRÉDITO</button>
            <button type="button">CARTÃO DE DÉBITO</button>
            <button type="button">DINHEIRO</button>
          </div>
        </Footer>
      </Form>

      {/* cafés selecionados */}
      <SectionChoice>
        <h3>Cafés selecionados</h3>

        <Aside>
          <div>
            <Coffee />

            <div>
              <span>Expresso Traficional</span>
              <span>R$ 9,90</span>
            </div>

            <div>
              <input type="number" />
              <button type="button">REMOVER</button>
            </div>
          </div>

          <div>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>

            <button type="button">CONFIRMAR</button>
          </div>
        </Aside>
      </SectionChoice>
    </Main>
  );
}
