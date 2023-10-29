import { Icons } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import { ColorsType } from '@/type/themeType';
import styled from '@emotion/styled';

type SidebarItemProps = {
  color: keyof ColorsType | 'none';
};

export const SidebarItem = styled.div<SidebarItemProps>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.color !== 'none' && Theme.colors[props.color]};
  &:hover {
    background-color: ${Theme.colors.gray2};
  }
`;
export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
`;
