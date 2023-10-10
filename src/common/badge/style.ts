import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const BadgeWrapper = styled.div`
  display: flex;
  width: fit-content;
  padding: 3px;
  border-radius: 2px;
  background-color: ${Theme.colors.gray2};
  font-size: ${Theme.fontSizes.body4};
  color: ${Theme.colors.black};
  font-weight: ${Theme.fontWeights.bold};
`;
