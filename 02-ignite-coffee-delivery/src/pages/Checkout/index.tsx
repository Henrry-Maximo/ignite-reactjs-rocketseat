import { Coffee, CurrencyDollar, MapPinLine } from "phosphor-react";
import { DescriptionHeader, IconHeader, RootHeader } from "./components/Header";
import {
  Aside,
  CheckoutCard,
  CheckoutContainer,
  CheckoutFooter,
  CheckoutFooterActions,
  CheckoutFooterDescription,
  CheckoutInput,
  CheckoutRow,
  CheckoutSection,
  CheckoutTitle,
  FormAddress,
} from "./styles";

export function CheckOut() {
  return (
    <CheckoutContainer>
      <CheckoutCard>
        <CheckoutTitle>Complete seu pedido</CheckoutTitle>

        <CheckoutSection>
          <RootHeader>
            <IconHeader>
              <MapPinLine />
            </IconHeader>

            <DescriptionHeader
              title="Endereço de Entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            />
          </RootHeader>

          <FormAddress>
            <CheckoutInput placeholder="CEP" />
            <CheckoutInput placeholder="Rua" />

            <CheckoutRow>
              <CheckoutInput placeholder="Número" />
              <CheckoutInput placeholder="Complemento" />
            </CheckoutRow>

            <CheckoutRow>
              <CheckoutInput placeholder="Bairro" />
              <CheckoutInput placeholder="Cidade" />
              <CheckoutInput placeholder="UF" />
            </CheckoutRow>
          </FormAddress>
        </CheckoutSection>

        <CheckoutFooter>
          <CheckoutFooterDescription>
            <CurrencyDollar />
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </CheckoutFooterDescription>

          <CheckoutFooterActions>
            <button type="button">CARTÃO DE CRÉDITO</button>
            <button type="button">CARTÃO DE DÉBITO</button>
            <button type="button">DINHEIRO</button>
          </CheckoutFooterActions>
        </CheckoutFooter>
      </CheckoutCard>

      {/* cafés selecionados */}
      <CheckoutSection>
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
      </CheckoutSection>
    </CheckoutContainer>
  );
}
