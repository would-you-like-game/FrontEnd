import { Icons } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

type SidebarItemProps = {
  checked: boolean;
};

export const SidebarItem = styled.div<SidebarItemProps>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? Theme.colors.gray2 : 'none')};
  font-weight: ${(props) => (props.checked ? '700' : '500')};
  &:hover {
    background-color: ${Theme.colors.gray2};
  }
`;
export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
`;
