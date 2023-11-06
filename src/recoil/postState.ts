import { postProps } from '@/type/type';
import { atom } from 'recoil';

export const editDataState = atom<postProps>({
  key: 'editDataState',
  default: {
    title: '',
    category: '게임종류',
    content: '',
    totalNumber: '',
  },
});

export const pageState = atom<number>({
  key: 'pageState',
  default: 1,
});
