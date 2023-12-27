import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Sidebar = styled.div`
  display: flex;
  min-width: 220px;
  height: 100%;
  flex-direction: column;
  background-color: ${Theme.colors.gray1};
  justify-content: space-between;
  box-shadow: 10px 10px 10px ${Theme.colors.gray2};
`;
