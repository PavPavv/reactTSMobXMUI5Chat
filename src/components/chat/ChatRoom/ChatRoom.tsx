import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { getClockTime } from '../../../utils/utils';

//  ui
import RoomBar from './RoomBar';
import SendPanel from './SendPanel';
import Message from './Message';

const Main = styled('main')(({ theme }) => ({
  maxWidth: 750,
  minWidth: 750,
  height: 'calc(100vh - 32px)',
  borderRadius: '3px',
  border: `1px solid ${theme.palette.grey[700]}`,
  margin: theme.spacing(2),
  overflow: 'hidden',

  [theme.breakpoints.down('md')]: {
    minWidth: '90%',
  },
}));

const ChatRoom = (): JSX.Element => {
  const store = useContext(StoreContext);
  const messages = store.chatStore.getRoomMessages();

  return (
    <Main>
      <RoomBar />
      <Stack
        spacing={1}
        direction="column-reverse"
        sx={{
          maxWidth: '100%',
          height: 'calc(100% - 89px)',
          padding: '20px',
          overflowX: 'hidden',
          overflowY: 'auto',
          backgroundColor: (theme) => 
              theme.palette.mode === 'light'
                ? theme.palette.grey[500]
                : theme.palette.grey[900],
        }}
        
      >
        {messages.sort((a, b) => b.ts.getTime() - a.ts.getTime()).map((message) => (
          <Message 
            key={message.id} 
            message={message.body}
            time={getClockTime(message.ts)}
            isOut={message.isOut}
          />
        ))}
      </Stack>
      <SendPanel />
    </Main>
  );
};

export default observer(ChatRoom);