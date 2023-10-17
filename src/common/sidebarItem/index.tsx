import * as s from './style';
type SidebarItemType = {
  title: string;
};
export const SidebarItem = ({ title }: SidebarItemType) => {
  return (
    <s.SidebarItem>
      <span>{title}</span>
    </s.SidebarItem>
  );
};
