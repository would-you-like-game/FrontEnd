import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Sidebar = styled.div`
  display: flex;
  min-width: 220px;
  height: 100%;
  flex-direction: column;
  background-color: ${Theme.colors.gray1};
  justify-content: space-between;
  box-shadow: 10px 10px 10px ${Theme.colors.gray2};
`;
export const CategoryBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: ${Theme.fontSizes.body4};
  font-weight: ${Theme.fontWeights.normal};
`;
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 30px;
`;
