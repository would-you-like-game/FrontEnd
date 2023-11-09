import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const LeftBottom = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  .date {
    font-size: ${Theme.fontSizes.body5};
    font-weight: ${Theme.fontWeights.normal};
    color: ${Theme.colors.gray3};
    text-align: end;
    padding: 10px 0;
  }

  .content {
    background-color: ${Theme.colors.gray1};
    flex: 1;
    padding: 20px 30px;
    font-size: ${Theme.fontSizes.body3};
    overflow-wrap: break-word;
    width: 100%;
  }
`;
