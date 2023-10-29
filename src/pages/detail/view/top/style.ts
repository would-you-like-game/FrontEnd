import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.bold};
  }
`;

export const UserButton = styled.div`
  display: flex;
  gap: 10px;
`;
