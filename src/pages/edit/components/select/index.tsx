import { useState } from 'react';
import * as s from './style';

const Select = () => {
  const OPTIONS = [
    '어드벤처',
    '아케이드',
    '스포츠',
    'MMORPG',
    '롤플레잉',
    '시뮬레이션',
    '퍼즐',
    'MOBA',
  ];
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
                <li onClick={() => onClickOption(item)} key={index}>
                  {item}
                </li>
              )
          )}
        </s.OptionList>
      )}
    </div>
  );
};

export default Select;
