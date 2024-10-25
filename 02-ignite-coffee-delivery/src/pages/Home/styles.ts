import styled from "styled-components";
import coffe from '../../assets/background-coffe-delivery.svg';

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7rem;

  background-image: url(${coffe});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;

  margin: 1rem;
  gap: 1rem;

  h1 {
    font-weight: 900;
    font-size:48px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-title'] };
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};

    width: 38rem;
  }
`;

export const WidgetItems = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite os itens quebrarem em múltiplas linhas */

  max-width: 38rem;
  margin: 15px;
  gap: 1rem;

  justify-content: center;

  label {
    display: flex;
    flex-basis: calc(50% - 1rem);  /* Cada item ocupa 50% da largura menos o gap */
    gap: 1rem;

    img {
      height: 24px;
      width: 24px;
    }
  }
`;

export const LogoIntro = styled.img`
  width: 22.5rem;
`;
