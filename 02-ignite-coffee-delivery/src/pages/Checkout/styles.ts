import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  height: 100vh;
  margin: 2rem 10rem 0rem;
  gap: 2rem;

  min-height: calc(100vh - 8.6rem); /* Altura mínima ao invés de fixa */
  overflow-y: auto; /* Apenas scroll vertical */
`;

export const CheckoutCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const CheckoutTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CheckoutSection = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #f3f2f2;
  /* border: 1px solid purple; */
  border-radius: 6px 44px 6px 44px;

  gap: 1rem;

  padding: 2rem;
`;

export const CheckoutHeader = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 0.8rem;
`;

export const CheckoutIcon = styled.span`
  color: ${(props) => props.theme["yellow-dark"]};
  font-size: 1.1rem;
`;

export const ContainerHeaderSections = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerHeaderTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ContainerHeaderDescription = styled.div`
  font-size: 0.8rem;
  font-weight: 500;
`;

export const FormAddress = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutInput = styled.input`
  width: 100%; /* Sets the width to 100% of its parent container */
  padding: 10px; /* Adds internal spacing */
  border: 1px solid #ccc; /* Defines a border */
  border-radius: 5px; /* Rounds the corners */
  font-size: 12px; /* Sets the font size */
  color: ${(props) => props.theme["base-subtitle"]}; /* Sets the text color */
  background-color: ${(props) =>
    props.theme["base-input"]}; /* Sets the background color */
`;

export const CheckoutRow = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const CheckoutFooterDescription = styled.div`
  display: flex;
`;

export const CheckoutFooterActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
`;

export const CheckoutButton = styled.button`
  display: flex;
  background-color: ${(props) => props.theme["base-button"]};

  gap: 0.6rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  letter-spacing: 0.1cap;
  text-transform: uppercase;

  border: none;
  border-radius: 8px;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme["purple"]};
    font-size: 1.2rem;
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: background-color 0.2s;
  }
`;

export const SectionChoice = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Aside = styled.aside`
  display: flex;
  background-color: #f3f2f2;
  /* border: 1px solid purple; */
  border-radius: 4px;

  padding: 2rem;
`;

export const CheckoutItem = styled.div`
  display: flex;
  flex-direction: row;

  gap: 2rem;
`;

export const CheckoutDescriptionItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ConfirmButton = styled.button`
  background-color: ${(props) => props.theme['yellow']};
  color: ${(props) => props.theme['white']};

  border: none;
  border-radius: 0.375rem;

  &:hover {
    background-color: ${(props) => props.theme['purple']};
  }
`;
