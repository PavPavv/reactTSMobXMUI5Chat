import Backdrop from '@mui/material/Backdrop';
import { styled } from '@mui/system';

const ModalBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: 1201, // TODO: add proper drawer zIndex from the theme
}));

type ModalProps = {
  isShown: boolean;
  children: JSX.Element;
};

const Modal = ({ isShown = false, children }: ModalProps): JSX.Element => {
  return (
    <ModalBackdrop open={isShown}>
      { children }
    </ModalBackdrop>
  )
};

export default Modal;