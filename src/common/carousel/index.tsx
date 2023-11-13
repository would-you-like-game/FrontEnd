import { JoinUser } from '@/pages/detail/components';
import * as s from './style';
import { useState, useEffect, useRef } from 'react';
export const Carousel = ({ itemList }) => {
  const [currentX, setCurrentX] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const listRef = useRef(null);
  const slideRef = useRef(null);
  const view = 3;
  const page = Math.ceil(itemList.length / view) - 1;

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentX}00%)`;
    setWidth(listRef.current.offsetWidth / (page + 1));
  }, [currentX]);
  const handleClickNextSlide = () => {
    if (currentX >= page) {
      setCurrentX(0);
    } else {
      setCurrentX((prev) => prev + 1);
    }
  };
  const handleClickPrevSlide = () => {
    if (currentX === 0) {
      setCurrentX(0);
    } else {
      setCurrentX((prev) => prev - 1);
    }
  };
  return (
    <s.Carousel width={width}>
      <button onClick={handleClickPrevSlide} className="minus">
        -
      </button>
      <button onClick={() => handleClickNextSlide()} className="plus">
        +
      </button>
      <s.Container ref={slideRef}>
        <s.List ref={listRef}>
          {itemList.map((item) => (
            <JoinUser
              key={item.joinPlayerId}
              nickname={item.nickname}
              profileImg={item.profileImg}
              temperature={23}
            />
          ))}
        </s.List>
      </s.Container>
    </s.Carousel>
  );
};
