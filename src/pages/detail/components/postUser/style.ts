import { Hearts } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const HeartIcon = styled(Hearts)`
  width: 12px;
  height: auto;
`;

export const PostUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const UserData = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: center;
  img {
    width: 155px;
    height: 165px;
    border: 1px solid black;
    border-radius: 50px;
  }
  .data {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .nickname {
    font-size: ${Theme.fontSizes.body2};
    font-weight: ${Theme.fontWeights.normal};
  }

  .temp {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
    color: ${Theme.colors.gray2};
  }
`;

export const UserState = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;
