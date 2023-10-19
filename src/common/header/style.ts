import { Hearts } from '@/assets/icon';
import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const HeartIcon = styled(Hearts)`
  width: 12px;
  height: auto;
`;

export const Header = styled.div`
  background-color: ${Theme.colors.black1};
  min-height: 140px;
  height: 15%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  color: ${Theme.colors.white};
  width: 1280px;
`;

export const LeftSide = styled.div`
  background-color: ${Theme.colors.gray3};
  min-width: 400px;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  .mainTitle {
    font-size: ${Theme.fontSizes.h1};
    font-weight: ${Theme.fontWeights.bold};
    color: ${Theme.colors.white};
    text-decoration: none;
  }
  & span {
    font-size: ${Theme.fontSizes.body2};
    font-weight: ${Theme.fontWeights.normal};
  }
`;
export const RightSide = styled.div`
  height: 100%;
  min-width: 600px;
  width: 60%;
  display: flex;
  padding: 30px 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & span {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
  }
`;

export const LoginOption = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;
export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
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
