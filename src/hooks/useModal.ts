import { useState, useCallback } from 'react';

interface ModalReturnProps {
  onModal: boolean;
  onToggleModal: () => void;
}

export const useModal = (): ModalReturnProps => {
  const [onModal, SetOnModal] = useState(false);
  const onToggleModal = useCallback(() => {
    SetOnModal((prev) => !prev);
  }, [SetOnModal]);
  return { onModal, onToggleModal };
};
