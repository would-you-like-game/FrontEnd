import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Edit = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 85%;

  input {
    font-size: ${Theme.fontSizes.h2};
    font-weight: ${Theme.fontWeights.bold};
    border: none;
    border-radius: 0;
    padding: 0 0 15px 0;
    border-bottom: 2px solid ${Theme.colors.gray2};

    &::placeholder {
      color: ${Theme.colors.gray1};
    }

    &:focus {
      outline: none;
    }
  }
`;

export const Bottom = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
`;
