import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

//  logic
import { StoreContext } from '../../../store/StoreContext';

const TestModal = (): JSX.Element => {
  const store = useContext(StoreContext);
  const isOpen = store.chatStore.getTestModalStatus();

  const clickHandler = (): void => {
    store.chatStore.toggleTestModal();
  }

  return (
    <Dialog
        fullWidth={true}
        open={isOpen}
        onClose={clickHandler}
      >
        <DialogTitle>Select or create sender</DialogTitle>
        <DialogContent>
          <div>tttttt</div>
        </DialogContent>
    </Dialog>    
  );
};

export default observer(TestModal);