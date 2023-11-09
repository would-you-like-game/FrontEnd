import React, { useCallback, useEffect, useState } from 'react';
import * as s from './style';
import { Button, Input } from '@/common';
import { useDebouncedCallback, useInput } from '@/hooks';
import { handleNicknameCheck } from '@/apis/mypage/api';

type MyProfileProps = {
  userImg: string | null;
  email: string;
  nickname: string;
};
export const MyProfile = ({ userImg, email, nickname }: MyProfileProps) => {
  const [form, onChangeHandler] = useInput('');
  const [errorMsg, setErrorMsg] = useState('');

  const debounceCheckNickname = useCallback(
    useDebouncedCallback((form: string) => {
      handleNicknameCheck(form).then((result) => {
        if (result === 200) {
          setErrorMsg('');
        } else if (result === 400) {
          setErrorMsg('닉네임은 8자 이하 특수문자, 공백, 자음, 모음 제외');
        } else {
          setErrorMsg('존재하는 닉네임입니다');
        }
      });
    }, 300),
    []
  );

  useEffect(() => {
    if (form.trim() !== '') debounceCheckNickname(form);
    else setErrorMsg('');
  }, [form]);

  return (
    <s.MyProfile>
      <img src={userImg} alt="profileImg" />
      <s.EmailNickname>
        <div>email: {email}</div>
        <s.Nickname>
          <div className="nickname">
            <Input
              placeholder={nickname}
              type="text"
              onChange={onChangeHandler}
              value={form}
            />
            <Button color="black2" type="submit">
              수정
            </Button>
          </div>
          <div className="nicknameError">{errorMsg}</div>
        </s.Nickname>
      </s.EmailNickname>
    </s.MyProfile>
  );
};
