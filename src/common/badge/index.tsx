import * as s from './style';
type BadgeType = {
  title: string;
};
export const Badge = ({ title }: BadgeType) => {
  return <s.BadgeWrapper>{title}</s.BadgeWrapper>;
};
