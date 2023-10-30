import { Icons } from '@/assets/icon';
import styled from '@emotion/styled';

export const Pagination = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
export const Icon = styled(Icons)`
  width: ${(props) => props.size}px;
  height: auto;
`;
