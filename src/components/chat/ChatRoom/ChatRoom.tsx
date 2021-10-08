import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';

//  logic
import { testMessages } from '../../../store/mobStore/testData';

//  ui
import RoomBar from './RoomBar';
import SendPanel from './SendPanel';
import Message from './Message';

const Main = styled('main')(({ theme }) => ({
  minWidth: 750,
  height: 'calc(100vh - 32px)',
  borderRadius: '3px',
  border: `1px solid ${theme.palette.grey[700]}`,
  margin: theme.spacing(2),
  maxWidth: 900,
  overflow: 'hidden',
}));

const ChatRoom = (): JSX.Element => {
  const messages = testMessages;

  return (
    <Main>
      <RoomBar name="Jack White" />
      <Stack
        spacing={1}
        direction="column-reverse"
        sx={{
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
        {messages.map((message) => (
          <Message key={message.id} message={message.body}/>
        ))}
      </Stack>
      <SendPanel />
    </Main>
  );
};

export default ChatRoom;