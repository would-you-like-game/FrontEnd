import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const LeftBottom = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .date {
    font-size: ${Theme.fontSizes.body5};
    font-weight: ${Theme.fontWeights.normal};
    color: ${Theme.colors.gray3};
    text-align: end;
  }

  .content {
    background-color: ${Theme.colors.gray1};
    flex: 1;
  }
`;
