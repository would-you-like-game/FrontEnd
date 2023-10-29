import * as s from './style';
export type AvatarTypes = {
  size: 'small' | 'medium' | 'large';
  src: string;
};
export const Avatar = ({ size, src }: AvatarTypes) => {
  return <s.Avatar size={size} src={src} alt="profileImg"></s.Avatar>;
};
