import { Theme } from '@/styles/theme';
import { ColorsType } from '@/type/themeType';
import styled from '@emotion/styled';

type ButtonProps = {
  color: keyof ColorsType;
  borderColor: keyof ColorsType;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => Theme.colors[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => Theme.colors[props.borderColor]};
  color: ${(props) =>
    props.color === 'white' ? Theme.colors.black2 : Theme.colors.white};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.semiBold};
  cursor: pointer;
`;
