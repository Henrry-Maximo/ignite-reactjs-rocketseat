import styled from "styled-components";

export const Main = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  letter-spacing: 0.1ch;

  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f9fafb;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  padding: 2rem;
  margin: 1rem;

  background-color: #dbeafe;
  border-radius: 2rem;

  img {
    width: 160px;
  }
`;

export const Img = styled.img`
  width: 160px;
  height: 160px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.5rem;

  align-items: center;

  color: #1e40af;
  border: 1px solid #1e40af;
  border-radius: 0.6rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 0.8rem;
  border: 1px solid #4338ca;

  color: #1e40af;
  background-color: #dbeafe;
`;

