import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Box from '@mui/material/Box';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { getClockTime, getTruncatedString } from '../../../utils/utils';

//  ui
import ChatName from './ChatName';
import ChatPreview from './ChatPreview';
import ChatListPanel from './ChatListPanel';

const Aside = styled('aside')(({ theme }) => ({
  width: '100%',
  minWidth: 340,  
  minHeight: '100vh',
  height: '100%',
  borderRight: `1px solid ${theme.palette.grey[700]}`,

  [theme.breakpoints.down('lg')]: {
    minWidth: 300,
  },
}));

const ViewBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  maxHeight: 'calc(100vh - 114px)',
  padding: theme.spacing(1),
  overflowX: 'hidden',
  overflowY: 'auto',
}));

const ChatList = (): JSX.Element => {
  const store = useContext(StoreContext);
  const messages = store.chatStore.messages;
  const selectedChatName = store.chatStore.selectedChat;

  //  get only unique chat names
  const rooms = Array.from(new Set(messages.map((message) => message.channelId)));

  return (
    <Aside>
      <ChatName username="Dave Grohl" />
      <ViewBox>
        {rooms.map((room, index) => {
          const isActiveRoom = room === selectedChatName;

          return (
            <ChatPreview 
              key={index}
              name={room}
              message={getTruncatedString(store.chatStore.latestMessageFromChannel(room))}
              time={getClockTime(store.chatStore.latestMessageTime(room))}
              latestSpeaker={store.chatStore.latestRoomSpeaker(room)}
              msgsCount={store.chatStore.unreadCount(room)}
              isRoomSelected={isActiveRoom}
            />
          );
        })}  
      </ViewBox> 
      <ChatListPanel />  
    </Aside>
  );
};

export default observer(ChatList);