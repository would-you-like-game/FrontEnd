import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const OptionButton = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  background-color: ${Theme.colors.black1};
  color: ${Theme.colors.white};
  padding: 15px;
  border-radius: 8px;
`;

export const OptionList = styled.div`
  border: 1px solid ${Theme.colors.gray1};
  border-radius: 8px;
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid ${Theme.colors.gray1};
  }
`;
