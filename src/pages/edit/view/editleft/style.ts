import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const EditLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Theme.colors.gray1};
  flex: 3;
  div {
    padding: 10px 10px 0 0;
    text-align: end;
  }
  textarea {
    flex: 1;
    border: none;
    padding: 20px;
    background-color: ${Theme.colors.gray1};
    &:focus {
      outline: none;
    }
  }
`;
