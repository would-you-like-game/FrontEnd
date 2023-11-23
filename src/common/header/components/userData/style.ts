import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const UserData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  .nickname {
    font-size: ${Theme.fontSizes.body2};
    font-weight: ${Theme.fontWeights.bold};
  }

  .temp {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
    color: ${Theme.colors.gray2};
  }
`;
