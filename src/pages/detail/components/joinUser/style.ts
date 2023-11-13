import { Hearts } from '@/assets/icon';
import styled from '@emotion/styled';

export const HeartIcon = styled(Hearts)`
  width: 12px;
  height: auto;
`;

export const JoinUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  cursor: pointer;
  gap: 10px;
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
  align-items: center;
  justify-content: center;
  gap: 10px;
  #nickname {
    height: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 85px;
    padding-top: 1px;
  }
`;
