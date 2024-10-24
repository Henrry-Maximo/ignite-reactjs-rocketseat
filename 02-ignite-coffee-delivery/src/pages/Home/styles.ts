import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10rem;
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

  max-width: 38rem;
  margin: 15px;
  gap: 1rem;

  /* text-align: center; */
  justify-content: center;

  label {
    display: flex;
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
