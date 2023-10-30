import { Hearts } from '@/assets/icon';
import styled from '@emotion/styled';

export const HeartIcon = styled(Hearts)`
  width: 12px;
  height: auto;
`;

export const JoinUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;

  img {
    width: 85px;
    height: 75px;
    border-radius: 50px;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
