import styled, { css } from "styled-components";

export type ButtonVariantColor = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariantColor;
}

const buttonVariats = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  .button {
    height: 40px;
    width: 100px;
  }

  ${(props) => {
    return css`
      background-color: ${buttonVariats[props.variant]}
    `;
  }}

  .primary {
    background: purple;
  }

  .secondary {
    background: orange;
  }

  .danger {
    background: red;
  }

  .success {
    background: green;
  }
`;
