import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const SignupContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 40px;
`;

export const Validate = styled.div`
  display: flex;
  align-items: end;
  gap: 10px;
`;

export const ValidateTexT = styled.div`
  padding-top: 5px;
  color: red;
  font-size: ${Theme.fontSizes.body6};
  font-weight: ${Theme.fontWeights.normal};
`;

export const ButtonContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
