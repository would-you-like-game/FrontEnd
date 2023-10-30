import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import { AvatarTypes } from '.';
import { Theme } from '@/styles/theme';
type AvatarProps = {
  size: keyof typeof sizeStyles;
  src: string;
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
export const Avatar = styled.img<AvatarProps>`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background-color: ${Theme.colors.gray2};
  ${(props) => sizeStyles[props.size]};
`;
