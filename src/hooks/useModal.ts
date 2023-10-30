import { useState, useCallback } from 'react';

interface ModalReturnProps {
  onModal: boolean;
  onClickHandler: () => void;
}

export const useModal = (): ModalReturnProps => {
  const [onModal, SetOnModal] = useState(false);
  const onClickHandler = useCallback(() => {
    SetOnModal((prev) => !prev);
  }, [SetOnModal]);
  return { onModal, onClickHandler };
};
