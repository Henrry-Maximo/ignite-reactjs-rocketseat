import imgCoffe from "../../assets/Illustration.png";
import imgIcon from "../../assets/Icon.png";
import imgIconTwo from "../../assets/Icon-two.png";
import imgIconThree from "../../assets/Icon-three.png";
import { SuccessCards, SuccessContainer, SuccessDeitals, SuccessDescription, SuccessHeader, SuccessInformations } from "./styles";

export const Success = () => {
  return (
    <SuccessContainer>
      <SuccessHeader>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </SuccessHeader>

      <SuccessInformations>
        <SuccessDeitals>
          <SuccessCards>
            <img src={imgIcon} alt="" />
            
            <SuccessDescription>
              <p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
            </SuccessDescription>
          </SuccessCards>

          <SuccessCards>
            <img src={imgIconTwo} alt="" />
            
            <SuccessDescription>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </SuccessDescription>
          </SuccessCards>

          <SuccessCards>
            <img src={imgIconThree} alt="" />
            <SuccessDescription>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </SuccessDescription>
          </SuccessCards>
        </SuccessDeitals>

        <img src={imgCoffe}></img>
      </SuccessInformations>
    </SuccessContainer>
  );
}