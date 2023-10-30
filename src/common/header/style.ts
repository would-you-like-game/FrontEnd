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
  box-shadow: 10px 10px 10px ${Theme.colors.gray2};
`;

export const LeftSide = styled.div`
  background-color: ${Theme.colors.gray3};
  min-width: 400px;
  height: 100%;
  flex-grow: 1;
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
