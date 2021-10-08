import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';

const ChatListPanelWrap = styled('div')(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.grey[700]}`,
  padding: theme.spacing(1),
  color: theme.palette.common.black,
  background: theme.palette.common.main,
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const ChatListPanel = (): JSX.Element => {
  return (
    <ChatListPanelWrap>
      <Switch {...label} defaultChecked />
    </ChatListPanelWrap>
  );
};

export default ChatListPanel;