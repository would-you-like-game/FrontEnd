import { Theme } from '@/styles/theme';
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { AvatarTypes } from '.';
type AvatarWrapperProps = {
  size: keyof typeof sizeStyles;
};
const sizeStyles: Record<AvatarTypes['size'], SerializedStyles> = {
  small: css`
    width: 80px;
    height: 80px;
  `,
  medium: css`
    width: 100px;
    height: 100px;
  `,
  large: css`
    width: 150px;
    height: 150px;
  `,
};
export const AvatarWrapper = styled.div<AvatarWrapperProps>`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: ${Theme.colors.gray2};
  ${(props) => sizeStyles[props.size]};
`;
