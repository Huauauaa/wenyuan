import styled from 'styled-components';

export type ButtonProps = {
  type?: string;
  children?: React.ReactNode;
};

const StyledButton = styled.button<{ buttonType: string }>`
  background-color: ${({ buttonType }) => {
    if (buttonType === 'primary') {
      return '#b8f1ed';
    }
    if (buttonType === 'success') {
      return '#b8f1cc';
    }
    if (buttonType === 'error') {
      return '#e26538';
    }
    if (buttonType === 'warn') {
      return '#f3d751';
    }
    return '#fff';
  }};
  color: ${({ buttonType }) => {
    if (buttonType === 'primary') {
      return '#fff';
    }
    return '#000';
  }};
  border-radius: 2px;
`;

const Button = (props: ButtonProps = {}) => {
  const { type = 'default', children } = props;
  return <StyledButton buttonType={type}>{children}</StyledButton>;
};

export default Button;
