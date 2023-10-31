import { api } from './api';

export const handleEmailCheck = async (
  email: string,
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('emailCheck api호출', email);
  try {
    const response = await api.post('user/signup/email', {
      email,
    });
    if (response.status === 200) {
      setIsEmail(true);
      console.log('이메일 중복 확인 성공');
    }
  } catch (error) {
    console.error('이메일 중복 확인 실패: ', error);
  }
};

export const handleEmailKeyCheck = async (
  email: string,
  emailValidate: string,
  setemailValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('handleEmailKeyCheck api호출', email, emailValidate);
  try {
    const response = await api.post('auth/signup/email/check', {
      email,
      emailValidate,
    });
    if (response.status === 200) {
      setemailValid(true);
      console.log('이메일 인증 성공');
    }
  } catch (error) {
    console.error('이메일 인증 실패: ', error);
  }
};

export const handleNicknameCheck = async (
  nickname: string,
  setIsNickname: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('handleNicknameCheck api호출', nickname);
  try {
    const response = await api.post('user/signup/nickname', {
      nickname,
    });
    if (response.status === 200) {
      setIsNickname(true);
      console.log('닉네임 중복 확인 성공');
    }
  } catch (error) {
    console.error('닉네임 중복 확인 실패: ', error);
  }
};

export const onSubmitSignup = async (data) => {
  const res = {
    email: data.email,
    password: data.password,
    nickname: data.nickname,
  };
  console.log('회원가입 폼', data, res);

  try {
    const response = await api.post('user/signup', res);
    if (response.status === 200) {
      console.log('회원가입 성공');
    }
  } catch (error) {
    console.error('error', error);
  }
};
