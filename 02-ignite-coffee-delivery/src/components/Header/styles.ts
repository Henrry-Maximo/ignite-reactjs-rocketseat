import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem 2rem 10rem;

  nav {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 0.8rem;

    span {
      display: flex;
      text-align: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;

      border-radius: 6px;

      color: ${(props) => props.theme["purple-dark"]};
      background: ${(props) => props.theme["purple-light"]};
    }

    a {
      position: relative;
      display: flex;
      text-align: center;
      align-items: center;
      padding: 0.5rem;

      border-radius: 6px;

      color: ${(props) => props.theme["yellow"]};
      background: ${(props) => props.theme["yellow-light"]};
    }
  }
`;

export const NumberCarrer = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: bold;

  border-radius: 50%;
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["yellow-dark"]};
`;
