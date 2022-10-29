import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../styles/colors';

export interface ButtonProps {
  type: ColorType;
  children?: React.ReactNode;
}

export type ColorType =
  | 'primary'
  | 'success'
  | 'danger'
  | 'info'
  | 'default'
  | 'warning'
  | 'error';

const StyledButton = styled.button<{ colorType: ColorType }>`
  background-color: ${({ colorType }) => {
    if (colorType === 'primary') {
      return colors.primary.base;
    }
    if (colorType === 'success') {
      return colors.success.base;
    }
    if (colorType === 'danger' || colorType === 'error') {
      return colors.danger.base;
    }
    if (colorType === 'warning') {
      return colors.warning.base;
    }
    if (colorType === 'info') {
      return colors.info.base;
    }
    return colors.white;
  }};
  color: ${({ colorType }) => {
    if (colorType === 'default') {
      return colors.black;
    }
    return colors.white;
  }};
  border-color: ${({ colorType }) => {
    if (colorType === 'primary') {
      return colors.primary.base;
    }
    if (colorType === 'success') {
      return colors.success.base;
    }
    if (colorType === 'danger' || colorType === 'error') {
      return colors.danger.base;
    }
    if (colorType === 'warning') {
      return colors.warning.base;
    }
    if (colorType === 'info') {
      return colors.info.base;
    }
    return '#dcdfe6';
  }};
  border-radius: 4px;
  outline: none;

  :hover {
    opacity: 0.6;
    border-color: ${({ colorType }) => {
      if (colorType === 'default') {
        return lighten(0.2, colors.primary.base);
      }
      return 'transparent';
    }};
    background-color: ${({ colorType }) => {
      if (colorType === 'default') {
        return lighten(0.3, colors.primary.base);
      }
      return '';
    }};
  }
`;

const Button = ({ children, type }: ButtonProps = { type: 'default' }) => {
  return <StyledButton colorType={type}>{children}</StyledButton>;
};

export default Button;
