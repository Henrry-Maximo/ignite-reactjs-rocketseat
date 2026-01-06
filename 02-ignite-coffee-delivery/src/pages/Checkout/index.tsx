import {
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Bank,
  Trash,
} from "phosphor-react";
import { DescriptionHeader, IconHeader, RootHeader } from "./components/Header";
import {
  CheckoutButton,
  CheckoutCard,
  CheckoutContainer,
  CheckoutDescriptionItem,
  CheckoutFooterActions,
  CheckoutInput,
  CheckoutItem,
  CheckoutRow,
  CheckoutSection,
  CheckoutTitle,
  ConfirmButton,
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

        <CheckoutSection>
          <RootHeader>
            <IconHeader>
              <CurrencyDollar />
            </IconHeader>

            <DescriptionHeader
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
          </RootHeader>

          <CheckoutFooterActions>
            <CheckoutButton type="button">
              <CreditCard /> 
              CARTÃO DE CRÉDITO
            </CheckoutButton>
            <CheckoutButton type="button">
              <Bank />
              CARTÃO DE DÉBITO
            </CheckoutButton>
            <CheckoutButton type="button">
              <Money />
              DINHEIRO
            </CheckoutButton>
          </CheckoutFooterActions>
        </CheckoutSection>
      </CheckoutCard>

      <CheckoutCard>
        <CheckoutTitle>Cafés selecionados</CheckoutTitle>

        <CheckoutSection>
          <CheckoutItem>
            {/* <Coffee /> */}

            <div>
              <div>
                <span>Expresso Traficional</span>
                <span>R$ 9,90</span>
              </div>

              <div>
                <div>
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>

                <button type="button">
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </CheckoutItem>

          <CheckoutItem>
            {/* <Coffee /> */}

            <div>
              <div>
                <span>Latte</span>
                <span>R$ 19,80</span>
              </div>

              <div>
                <div>
                  <button>-</button>
                  <input type="number" />
                  <button>+</button>
                </div>

                <button type="button">
                  <Trash size={16} />
                  REMOVER
                </button>
              </div>
            </div>
          </CheckoutItem>

          <CheckoutDescriptionItem>
            <div>
              <span>Total de itens:</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega:</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Tota:</span>
              <span>R$ 33,20</span>
            </div>

            <ConfirmButton type="button">CONFIRMAR</ConfirmButton>
          </CheckoutDescriptionItem>
        </CheckoutSection>
      </CheckoutCard>
    </CheckoutContainer>
  );
}
