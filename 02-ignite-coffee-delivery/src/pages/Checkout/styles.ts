import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 2rem 10rem 0rem;
  gap: 2rem;

  min-height: calc(100vh - 8.6rem); /* Altura mínima ao invés de fixa */
  overflow-y: auto; /* Apenas scroll vertical */
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;

  background-color: #f3f2f2;
  border: 1px solid purple;
  border-radius: 4px;

  gap: 1rem;

  padding: 2rem;
`;

export const InforHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Icon = styled.span`
  background-color: yellow;
`;

export const Footer = styled.footer`
  display: flex;
  background-color: #f3f2f2;
  border: 1px solid purple;
  border-radius: 4px;

  padding: 2rem;
`;

export const SectionChoice = styled.section`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;
export const Aside = styled.aside`
  display: flex;
  background-color: #f3f2f2;
  border: 1px solid purple;
  border-radius: 4px;

  padding: 2rem;
`;
