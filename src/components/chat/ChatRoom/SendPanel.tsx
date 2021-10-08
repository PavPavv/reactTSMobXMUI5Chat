import React, { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { Message } from '../../../store/chatStore/chatStore';

const SendPanelWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '44px',
  borderTop: `1px solid ${theme.palette.grey[700]}`,
}));

const SendPanelInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '44px',
  padding: '0 14px',
  border: 'none',
  outline: 'none',
}));

const SendPanel = (): JSX.Element => {
  const [value, setValue] = useState('');
  const store = useContext(StoreContext);
  
  const sendHandler = (): void => {
    if (!value) return;

    const newMessage: Message = {
      id: Date.now(),
      roomId: store.chatStore.selectedChat,
      channelId: store.chatStore.selectedChat,
      body: value,
      ts: new Date(),
      isOut: true,
      isUnread: false,
    };

    store.chatStore.sendMessage(newMessage);
    setValue('');
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return (
    <SendPanelWrap>
      <SendPanelInput 
        value={value}
        onChange={changeHandler}
      />
      <IconButton 
        size="large" 
        color="primary" 
        type="button"
        onClick={sendHandler}  
      >
        <SendRoundedIcon />
      </IconButton>
    </SendPanelWrap>
  );
};

export default observer(SendPanel);