import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.normal};
`;
