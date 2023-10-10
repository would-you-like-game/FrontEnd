import * as s from './style';
export type AvatarTypes = {
  size: 'small' | 'medium' | 'large';
};
export const Avatar = ({ size }: AvatarTypes) => {
  return <s.Avatar size={size}></s.Avatar>;
};
