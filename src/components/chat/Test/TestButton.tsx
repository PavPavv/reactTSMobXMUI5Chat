import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

//  logic
import { StoreContext } from '../../../store/StoreContext';

const TestButton = (): JSX.Element => {
  const store = useContext(StoreContext);

  const messageHandler = (): void => {
    store.chatStore.toggleTestModal();
  };

  return (
    <IconButton color="primary" edge="end" onClick={messageHandler}>
      <ForumIcon />
    </IconButton>
  );
};

export default observer(TestButton);
