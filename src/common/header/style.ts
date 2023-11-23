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
