import styled from "styled-components";
import coffe from "../../assets/background-coffe-delivery.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2.5rem;
  gap: 1rem;
  
  background-image: url(${coffe});
  backdrop-filter: blur(4);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 32rem;
  gap: 2rem;
`;

export const Summary = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 1rem;

  h1 {
    font-size: 46px;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const WidgetItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin: 15px;
  gap: 1rem;

  justify-content: center;

  label {
    display: flex;
    flex-basis: calc(
      50% - 1rem
    ); /* Cada item ocupa 50% da largura menos o gap */
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  padding: 0 12rem 0 12rem;

  h2 {
    font-size: 42px;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-title"]};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  img {
    height: 150px;
  }
`;
