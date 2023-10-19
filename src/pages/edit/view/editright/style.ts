import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const EditRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-left: 30px;

  input {
    text-align: center;
    width: 160px;
    font-size: ${Theme.fontSizes.body3};
    font-weight: 700;
    border-radius: 0;
    padding: 0 0 5px 0;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const GameOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
