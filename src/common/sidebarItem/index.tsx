import { IconTypeProps } from '@/assets/icon';
import * as s from './style';

interface SidebarItemType extends IconTypeProps {
  index: number;
  title: string;
  onClickHandler: (index: number) => void;
  checked: boolean;
}
export const SidebarItem = ({
  index,
  title,
  type,
  checked,
  onClickHandler,
}: SidebarItemType) => {
  return (
    <s.SidebarItem
      color={checked ? 'gray2' : 'none'}
      onClick={() => onClickHandler(index)}
    >
      <s.Icon type={type} size={20} />
      <span>{title}</span>
    </s.SidebarItem>
  );
};
