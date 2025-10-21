import styled, { css } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "red",
  danger: "green",
  success: "blue",
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 0px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${
    props => {
      return css`background-color: ${buttonVariants[props.variant]}`
    }
  } */
`;