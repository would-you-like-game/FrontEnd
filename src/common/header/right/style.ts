import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Right = styled.div`
  height: 100%;
  min-width: 600px;
  width: fit-content;
  display: flex;
  padding: 30px 40px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;

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
