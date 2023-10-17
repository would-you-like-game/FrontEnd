import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  height: 100vh;
  padding: 20px;
  gap: 40px;
  background-color: ${Theme.colors.gray1};
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.normal};
`;
