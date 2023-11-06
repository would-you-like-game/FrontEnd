import { useCallback, useState } from 'react';

export const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState(false);
  const onClickToggle = useCallback(() => {
    setIsToggle((prev) => !prev);
  }, []);
  return [isToggle, onClickToggle];
};
