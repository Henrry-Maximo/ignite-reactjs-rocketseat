import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin: 2rem 10rem 0rem;
  gap: 2rem;

  height: calc(100vh - 8.6rem);

  overflow: auto;
  scroll-behavior: smooth;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`;

export const Section = styled.section`
  display: flex;
  background-color: #F3F2F2;
  border: 1px solid purple;
  border-radius: 4px;

  padding: 2rem;
`;

export const Footer = styled.footer`
  display: flex;
  background-color: #F3F2F2;
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
  background-color: #F3F2F2;
  border: 1px solid purple;
  border-radius: 4px;

  padding: 2rem;
`;