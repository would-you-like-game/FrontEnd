import { api } from './api';

export const handleEmailCheck = async (
  email: string,
  setIsEmail: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('emailCheck api호출', { email: email });
  try {
    const response = await api.post('user/signup/email', {
      email: email,
    });
    if (response.status === 200) {
      setIsEmail(true);
      console.log('이메일 중복 확인 성공', response);
    }
  } catch (error) {
    console.error('이메일 중복 확인 실패: ', error);
  }
};

export const handleEmailKeyCheck = async (
  email: string,
  code: string,
  setemailValid: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log('handleEmailKeyCheck api호출', {
    email: email,
    code: code,
  });
  try {
    const response = await api.post('user/signup/email/check', {
      email: email,
      code: code,
    });
    if (response.status === 200) {
      setemailValid(true);
      console.log('이메일 인증 성공', response);
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
  const regex = /^[A-Za-z\d]{1,8}$/;
  if (!regex.test(nickname)) console.log('조건성립X');
  else {
    try {
      const response = await api.post('user/signup/nickname', {
        nickname: nickname,
      });
      if (response.status === 200) {
        setIsNickname(true);
        console.log('닉네임 중복 확인 성공');
      }
    } catch (error) {
      console.error('닉네임 중복 확인 실패: ', error);
    }
  }
};

export const onSubmitSignup = async (data) => {
  console.log('회원가입 폼', {
    email: data.email,
    password: data.password,
    nickname: data.nickname,
  });

  try {
    const response = await api.post('user/signup', {
      email: data.email,
      password: data.password,
      nickname: data.nickname,
    });
    if (response.status === 200) {
      console.log('회원가입 성공');
      window.location.replace('/login');
    }
  } catch (error) {
    console.error('error', error);
  }
};
