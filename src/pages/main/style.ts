import styled from '@emotion/styled';

export const Main = styled.div`
  display: flex;
  align-items: center;
  & > div:first-child {
    border: 1px solid red;
  }
`;

export const Top = styled.div`
  display: flex;
`;

export const Workspace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
