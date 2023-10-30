import { atom } from 'recoil';

export const sidebarState = atom<string>({
  key: 'sidebarState',
  default: 'all',
});
