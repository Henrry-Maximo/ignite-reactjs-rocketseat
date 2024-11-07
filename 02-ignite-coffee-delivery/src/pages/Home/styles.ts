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
  flex-flow: column;

  margin: 2rem 10rem 0rem 10rem;
  gap: 1rem;

  h2 {
    font-size: 36px;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["base-title"]};
  }

  /* img {
    height: 150px;
  } */
`;

export const RootCard = styled.div`
  display: flex;
  flex-direction: row;

  margin: 2rem;
  gap: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 18rem;
  padding: 1rem;
  border-radius: 15px 50px;
  gap: 0.70rem;

  background-color: ${(props) => props.theme["base-card"]};

  div > input,
  button {
    display: flex;
    flex-direction: column;

    height: 20px;
    width: 20px;
  }
`;

export const RootImg = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 5rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-direction: row !important;

  justify-content: center;
  align-items: center;

  gap: 0.25rem;

  span {
    color: ${(props) => props.theme["yellow-dark"]};
    background-color: ${(props) => props.theme["yellow-light"]};

    padding: 0.1rem 1rem 0.1rem 1rem;
    border-radius: 16px;
  }
`;

export const Description = styled.div`
  margin: 1rem;
  label {
    font-weight: 200;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row !important;

  justify-content: space-around;
  align-items: center;

  gap: 0.25rem;

  label {
    font-weight: 200;
    font-size: 0.75rem;

    display: flex;
    gap: 0.5rem;

    align-items: center;

    span {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  div {
    display: flex;
    flex-direction: row;

    gap: 0.5rem;

    input {
      width: 2rem;

      text-align: center;
      background-color: ${(props) => props.theme["base-input"]};
    }

    button {
      background-color: ${(props) => props.theme["purple-dark"]};
      color: ${(props) => props.theme["white"]};
    }
  }
`;
