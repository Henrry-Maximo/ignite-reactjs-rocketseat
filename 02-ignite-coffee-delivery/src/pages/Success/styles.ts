import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: calc(100vh - 7rem);
  gap: 2rem;

  padding: 6rem 18rem 0rem 18rem;
`;

export const SuccessHeader = styled.header`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;

  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const SuccessInformations = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SuccessDeitals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0rem 5rem;
  gap: 2rem;

  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme["yellow-dark"]};
`;

export const SuccessCards = styled.div`
  display: flex;
  gap: 1rem;

  align-items: center;
  font-size: 1rem;

  img {
    height: 32px;
    width: 32px;
  }
`;

export const SuccessDescription = styled.div`
  font-size: 16px;
  font-style: bold;
`;
