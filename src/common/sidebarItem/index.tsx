import * as s from './style';
type SidebarItemType = {
  index: number;
  title: string;
  iconType: 'Human' | 'People' | 'EmptyGame' | 'FilledGame';
  iconColor: string;
  onClickHandler: (index: number) => void;
  checked: boolean;
};
export const SidebarItem = ({
  index,
  title,
  iconType,
  iconColor,
  checked,
  onClickHandler,
}: SidebarItemType) => {
  return (
    <s.SidebarItem onClick={() => onClickHandler(index)}>
      <div className="iconSize"></div>
      <s.Icon type={iconType} color={checked ? 'red' : iconColor} size={28} />
      <span>{title}</span>
    </s.SidebarItem>
  );
};
