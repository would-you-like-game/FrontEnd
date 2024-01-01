import { atom } from 'recoil';

export const tokenState = atom<string>({
  key: 'tokenState',
  default: '',
});

export const profileImgState = atom<string | ArrayBuffer>({
  key: 'profileImgState',
  default: '',
});
