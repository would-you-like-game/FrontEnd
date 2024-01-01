import { api } from '../api';

export const handleNicknameCheck = async (nickname: string) => {
  console.log('handleNicknameCheck api호출', nickname);

  const regex = /^[0-9a-zA-Z가-힣]{1,8}$/;
  if (!regex.test(nickname)) return 400;

  try {
    const response = await api.post('user/signup/nickname', {
      nickname: nickname,
    });
    if (response.status === 200) return 200;
  } catch (error) {
    return 409;
  }
};

export const onChangeUserImage = async (userImg: File) => {
  console.log('onChangeUserImage api호출', userImg);
  if (!userImg) return 400;
  try {
    const formData = new FormData();
    formData.append('userImg', userImg);

    const response = await api.put('user/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (response.status === 200) return 200;
  } catch (error) {
    return 409;
  }
};
