import * as s from './style';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  width?: number;
  heigth?: number;
}

export const Modal = ({
  children,
  onClose,
  width = 500,
  heigth = 500,
}: ModalProps) => {
  return (
    <s.Modal>
      <s.Outside />
      <s.Inside width={width} heigth={heigth}>
        <s.Icon type="cancel" size={20} onClick={onClose} />
        {children}
      </s.Inside>
    </s.Modal>
  );
};
