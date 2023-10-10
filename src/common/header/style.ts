import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const HeaderWrapper = styled.div`
  background-color: ${Theme.colors.black1};
  height: 200px;
  display: flex;
  flex-direction: row;
  color: ${Theme.colors.white};
`;

export const LeftSide = styled.div`
  background-color: ${Theme.colors.gray3};
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 250px;
  gap: 40px;
  & h2 {
    font-size: ${Theme.fontSizes.h1};
    font-weight: ${Theme.fontWeights.bold};
  }
  & span {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
  }
`;
export const RightSide = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  padding: 30px 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > div:nth-child(2) {
    width: 50%;
  }
  & div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    & div {
      display: flex;
      flex-direction: row;
      gap: 5px;
    }
  }
  & p {
    font-size: ${Theme.fontSizes.body2};
    font-weight: ${Theme.fontWeights.bold};
  }
  & span {
    font-size: ${Theme.fontSizes.body4};
    font-weight: ${Theme.fontWeights.normal};
  }
`;
