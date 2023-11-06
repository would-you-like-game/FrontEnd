import * as s from './style';
import { sidebarData } from '@/utils/sidebarData';
import { useToggle } from '@/hooks/useToggle';
import { useSetRecoilState } from 'recoil';
import { editDataState } from '@/recoil/postState';
import { useCallback, useState } from 'react';

const Select = () => {
  const OPTIONS = sidebarData('edit');
  const [isToggle, onClickToggle] = useToggle();
  const [option, setOption] = useState('게임종류');
  const setEditData = useSetRecoilState(editDataState);

  const onClickOption = useCallback(
    (title: string, category: string) => {
      setEditData((prev) => ({ ...prev, category: category }));
      setOption(title);
      onClickToggle();
    },
    [onClickToggle, setEditData]
  );

  return (
    <div>
      <s.OptionButton onClick={onClickToggle}>{option}</s.OptionButton>
      {isToggle && (
        <s.OptionList>
          {OPTIONS.map(
            (item, index) =>
              index !== 0 && (
                <li
                  onClick={() => onClickOption(item.title, item.category)}
                  key={index}
                >
                  <s.Icon size={12} type={item.type} />
                  {item.title}
                </li>
              )
          )}
        </s.OptionList>
      )}
    </div>
  );
};

export default Select;
