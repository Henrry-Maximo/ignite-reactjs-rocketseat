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
  CheckoutButtons,
  CheckoutCard,
  CheckoutContainer,
  CheckoutDescriptionItem,
  CheckoutFooterActions, CheckoutInput,
  CheckoutItem,
  CheckoutItemButton,
  CheckoutItemHeader,
  CheckoutItemHeaderPrice,
  CheckoutItemHeaderTitle,
  CheckoutItemInput,
  CheckoutRow,
  CheckoutSection,
  CheckoutSpecialTitle,
  CheckoutTitle,
  CheckoutWrapper,
  ConfirmButton,
  FormAddress,
  LineDivisor
} from "./styles";
import coffe from "./../../assets/products/coffe/express-traditional.png";

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
            <img src={coffe} />

            <CheckoutWrapper>
              <CheckoutItemHeader>
                <CheckoutItemHeaderTitle>Expresso Traficional</CheckoutItemHeaderTitle>
                <CheckoutItemHeaderPrice>R$ 9,90</CheckoutItemHeaderPrice>
              </CheckoutItemHeader>

              <CheckoutButtons>
                <CheckoutItemInput>
                  <button>-</button>
                  <input type="number" value={1} />
                  <button>+</button>
                </CheckoutItemInput>

                <CheckoutItemButton type="button">
                  <Trash size={16} />
                  REMOVER
                </CheckoutItemButton>
              </CheckoutButtons>
            </CheckoutWrapper>
          </CheckoutItem>

          <LineDivisor />

          <CheckoutDescriptionItem>
            <div>
              <span>Total de itens:</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega:</span>
              <span>R$ 3,50</span>
            </div>

            <CheckoutSpecialTitle>
              <span>Tota:</span>
              <span>R$ 33,20</span>
            </CheckoutSpecialTitle>

            <ConfirmButton type="button">CONFIRMAR PEDIDO</ConfirmButton>
          </CheckoutDescriptionItem>
        </CheckoutSection>
      </CheckoutCard>
    </CheckoutContainer>
  );
}
