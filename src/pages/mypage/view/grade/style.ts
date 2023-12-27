import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';

export const Grade = styled.div`
  flex: 5;
  display: flex;
  border: 1px solid ${Theme.colors.gray2};
  gap: 60px;
`;

export const GradeText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

export const SideText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px;
`;
