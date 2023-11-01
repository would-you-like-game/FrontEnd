import { useState } from 'react';
import * as s from './style';
import { Button, Input } from '@/common';
import { useForm } from 'react-hook-form';
import {
  handleEmailCheck,
  handleEmailKeyCheck,
  handleNicknameCheck,
  onSubmitSignup,
} from '@/apis/signupApi';

export const SignupContent = () => {
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);
  const [nicknameAuth, setNicknameAuth] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const permission =
    emailAuth &&
    nicknameAuth &&
    watch('password') &&
    watch('passwordVerification');

  const handleSignupSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailAuth && nicknameAuth) {
      console.log('폼버튼 성공');
      handleSubmit(onSubmitSignup)();
    }
  };

  return (
    <s.SignupContent
      onSubmit={(e) => {
        handleSignupSubmit(e);
      }}
    >
      <s.Validate>
        <Input
          type="email"
          register={register('email', { required: true })}
          placeholder="이메일을 입력해주세요"
          readOnly={emailCheck}
        >
          E-mail
        </Input>
        {!emailCheck && (
          <Button
            onClick={() => {
              handleEmailCheck(watch('email'), setEmailCheck);
            }}
          >
            이메일 인증
          </Button>
        )}
      </s.Validate>
      {emailCheck && (
        <s.Validate>
          <Input
            type="text"
            register={register('emailValidate', { required: true })}
            placeholder="인증코드를 입력해주세요"
            readOnly={emailAuth}
          >
            E-mail Verification
          </Input>
          {!emailAuth && (
            <Button
              onClick={() => {
                handleEmailKeyCheck(
                  watch('email'),
                  watch('emailValidate'),
                  setEmailAuth
                );
              }}
            >
              인증번호 확인
            </Button>
          )}
        </s.Validate>
      )}
      <s.Validate>
        <Input
          type="text"
          register={register('nickname', { required: true })}
          placeholder="닉네임을 입력해주세요"
          readOnly={nicknameAuth}
        >
          Nickname
        </Input>
        {!nicknameAuth && (
          <Button
            onClick={() => {
              handleNicknameCheck(watch('nickname'), setNicknameAuth);
            }}
          >
            닉네임 확인
          </Button>
        )}
      </s.Validate>
      <Input
        type="password"
        register={register('password', {
          pattern: {
            value: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^<>&*]).{8,20}$/,
            message:
              '비밀번호는 8자 이상 20자 미만 대소문자, 숫자, 특수문자(!@#$%"<>"^&*)를 각 1개 이상씩 사용해야합니다',
          },
        })}
        placeholder="비밀번호를 입력해주세요"
      >
        Password
      </Input>
      {errors.password && typeof errors.password.message === 'string' && (
        <s.ValidateTexT>{errors.password.message}</s.ValidateTexT>
      )}
      <Input
        type="password"
        register={register('passwordVerification', {
          required: '비밀번호 확인은 필수 입력입니다',
          validate: {
            matchPassword: (value: string) => {
              return (
                watch('password') === value || '비밀번호가 일치하지 않습니다'
              );
            },
          },
        })}
        placeholder="비밀번호를 다시 입력해주세요"
      >
        Password Verification
      </Input>
      {errors.passwordVerification &&
        typeof errors.passwordVerification.message === 'string' && (
          <s.ValidateTexT>{errors.passwordVerification.message}</s.ValidateTexT>
        )}
      <s.ButtonContainer>
        <Button
          color={permission ? 'black2' : 'none'}
          borderColor={permission ? 'black2' : 'white'}
          size="medium"
          type="submit"
        >
          Signup
        </Button>
      </s.ButtonContainer>
    </s.SignupContent>
  );
};
