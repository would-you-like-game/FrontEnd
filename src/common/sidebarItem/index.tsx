import { IconTypeProps } from '@/assets/icon';
import * as s from './style';
interface SidebarItemType extends IconTypeProps {
  title: string;
  onClickHandler: () => void;
  checked: boolean;
}
export const SidebarItem = ({
  title,
  type,
  checked,
  onClickHandler,
}: SidebarItemType) => {
  return (
    <s.SidebarItem checked={checked} onClick={onClickHandler}>
      <s.Icon type={type} size={checked ? 22 : 20} />
      <span>{title}</span>
    </s.SidebarItem>
  );
};
