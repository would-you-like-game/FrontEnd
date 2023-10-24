import { useState } from 'react';
import * as s from './style';
import { sidebarData } from '@/utils/sidebarData';

const Select = () => {
  const OPTIONS = sidebarData('edit');
  const [isToggle, setIsToggle] = useState(false);
  const [option, setOption] = useState('게임종류');

  const onClickToggle = () => {
    setIsToggle(!isToggle);
  };

  const onClickOption = (option: string) => {
    setOption(option);
    setIsToggle(false);
  };

  return (
    <div>
      <s.OptionButton onClick={onClickToggle}>{option}</s.OptionButton>
      {isToggle && (
        <s.OptionList>
          {OPTIONS.map(
            (item, index) =>
              index !== 0 && (
                <li onClick={() => onClickOption(item.title)} key={index}>
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
