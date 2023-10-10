import * as s from './style';
type BadgeTypes = {
  title: string;
};
export const Badge = ({ title }: BadgeTypes) => {
  return <s.BadgeWrapper>{title}</s.BadgeWrapper>;
};
