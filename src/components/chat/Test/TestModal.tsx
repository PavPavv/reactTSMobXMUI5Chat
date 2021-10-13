import { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { testMessages } from '../../../store/mobStore/testData';
import { Message } from '../../../store/chatStore/chatStore';

const TestModal = (): JSX.Element => {
  const [defaultSender, setDefaultSender] = useState('');
  const [message, setMessage] = useState('');
  const store = useContext(StoreContext);
  const isOpen = store.chatStore.getTestModalStatus();
  const names = Array.from(new Set(testMessages.map((message) => message.channelId)));

  useEffect(() => {
    console.log('defaultSender', defaultSender)
  }, [defaultSender]);

  const clickHandler = (): void => {
    store.chatStore.toggleTestModal();
  };

  const handleChange = (e: SelectChangeEvent) => {
    setDefaultSender(e.target.value as string)
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value as string)
  };

  const sendHandler = (): void => {
    if (!defaultSender) return;
    if (!message) return;

    const newMessage: Message = {
      id: Date.now(),
      roomId: defaultSender,
      channelId:defaultSender,
      body: message,
      ts: new Date(),
      isOut: false,
      isUnread: true,
    };

    store.chatStore.sendMessage(newMessage);

    setDefaultSender('');
    setMessage('');
  };

  return (
    <Dialog
        fullWidth={true}
        open={isOpen}
        onClose={clickHandler}
      >
        <DialogTitle>Select or create sender and send a message to a certain room!</DialogTitle>
        <DialogContent>
          <Box mt={2} sx={{ maxWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Name</InputLabel>
              <Select
                labelId="sender-label"
                id="sender-name"
                value={defaultSender}
                label="Name"
                onChange={handleChange}
              >
                {names.map((item) => (
                  <MenuItem key={item} value={item}>{item}</MenuItem>
                ))}
                <MenuItem value={''}>Clear</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mt={5}>
            <FormControl fullWidth>
              <TextField
                  id="outlined-multiline-static"
                  label="New message"
                  multiline
                  rows={4}
                  fullWidth
                  value={message}
                  onChange={handleMessage}
                />
            </FormControl>
          </Box>

          <Box mt={4}>
            <Button variant="contained" onClick={sendHandler}>
              Send message
            </Button>
          </Box>
        
        </DialogContent>
    </Dialog>    
  );
};

export default observer(TestModal);