import { useHistory } from "react-router-dom";
import { useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';

//  logic
import { StoreContext } from '../store/StoreContext';

//  ui
import ChatList from '../components/chat/ChatList/ChatList';
import ChatRoom from '../components/chat/ChatRoom/ChatRoom';
import NoSelectedMessages from '../components/chat/ChatRoom/NoSelectedMessages';
import TestModal from '../components/chat/Test/TestModal';

const DesktopWrap = styled('div')(({ theme }) => ({
  height: '100%',

  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
}));

const MobDrawer = styled(Drawer)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const ChatPage = (): JSX.Element => {
  const history = useHistory();
  const store = useContext(StoreContext);
  const selectedChat = store.chatStore.selectedChat;
  const isLoggedIn = localStorage.getItem('MY_CHAT_TOKEN');

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [history, isLoggedIn]);

  const handleCloseMobMenu = (): void => {
    store.mobStore.closeMobMenu();
  };

  return (
    <Container maxWidth={false} disableGutters >
      <Grid container >
        <Grid container item lg={3}>
          <MobDrawer 
            anchor="left" 
            open={store.mobStore.isOpen}
            onClose={handleCloseMobMenu}
          >
            <ChatList />
          </MobDrawer>
          <DesktopWrap>
            <ChatList />
          </DesktopWrap>
        </Grid>
        <Grid container item md ={12} lg={9} justifyContent="center" >
          {selectedChat ? <ChatRoom /> : <NoSelectedMessages />}
        </Grid>
      </Grid>

      {/* Modal window to test message sendings */}
      {/* <Modal isShown={store.chatStore.isTestShown}>
        <TestMessages />
      </Modal> */}
      <TestModal />
    </Container>
    
  );  
};

export default observer(ChatPage);