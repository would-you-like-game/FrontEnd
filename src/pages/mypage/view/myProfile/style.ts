import { Theme } from '@/styles/theme';
import styled from '@emotion/styled';
export const MyProfile = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  background-color: ${Theme.colors.gray1};
  padding: 0 40px 0 40px;
  gap: 50px;
  img {
    width: 170px;
    height: 190px;
    background-color: ${Theme.colors.gray3};
  }
`;

export const EmailNickname = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Nickname = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  .nickname {
    display: flex;
    gap: 20px;
  }
  input {
    padding: 10px;
  }
  button {
    height: 40px;
  }
  .nicknameError {
    height: 14px;
    color: red;
    font-size: ${Theme.fontSizes.body5};
  }
`;
