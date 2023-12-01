import * as s from './style';
import fallbackImg from '@/assets/fallbackImg.jpg';

export type AvatarTypes = {
  size: 'small' | 'medium' | 'large';
  src: string;
};
export const Avatar = ({ size, src }: AvatarTypes) => {
  return (
    <s.Avatar size={size} src={src ?? fallbackImg} alt="profileImg"></s.Avatar>
  );
};
