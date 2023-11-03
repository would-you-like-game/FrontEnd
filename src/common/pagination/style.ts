import { Icons } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

type PageProps = {
  checked: boolean;
};

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
  cursor: pointer;
`;

export const Page = styled.div<PageProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${(props) => (props.checked ? Theme.colors.gray2 : 'none')};
  cursor: pointer;
`;
