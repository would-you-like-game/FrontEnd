import { Theme } from '@/styles/theme';
import { ColorsType } from '@/type/themeType';
import styled from '@emotion/styled';

type ButtonWrapperProps = {
  color: keyof ColorsType;
  borderColor: keyof ColorsType;
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  background-color: ${(props) => Theme.colors[props.color]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 160px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid ${(props) => Theme.colors[props.borderColor]};
  color: ${Theme.colors.white};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.semiBold};
`;
