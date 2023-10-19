import { Icons } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const SidebarItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
  & span {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: ${Theme.colors.gray2};
  }
`;
export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
`;
