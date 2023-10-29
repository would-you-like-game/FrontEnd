import { Hearts } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const HeartIcon = styled(Hearts)`
  width: 12px;
  height: auto;
`;

export const PostUser = styled.div`
  display: flex;
  img {
    width: 155px;
    height: 165px;
    border-radius: 50px;
  }
`;

export const UserData = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 80px;

  .nickname {
    font-size: ${Theme.fontSizes.body3};
    font-weight: ${Theme.fontWeights.normal};
  }

  .temp {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
    color: ${Theme.colors.gray2};
  }
`;
