import styled from '@emotion/styled';
import { ColorsType } from '@/type/themeType';
import { Theme } from '@/styles/theme';

type ButtonProps = {
  cursor?: 'pointer' | 'default';
  color: keyof ColorsType;
  borderColor: keyof ColorsType;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.color !== 'none' ? Theme.colors[props.color] : Theme.colors.gray1};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => Theme.colors[props.borderColor]};
  color: ${(props) =>
    props.color === 'white'
      ? Theme.colors.black2
      : props.color !== 'none'
      ? Theme.colors.white
      : Theme.colors.gray2};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.semiBold};
  cursor: ${(props) => props.cursor};
`;
