import { useState, useEffect, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Grid from '@mui/material/Grid';
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
  const [defaultSenderDisabled, setDefaultSenderDisabled] = useState(false);
  const [customSender, setCustomSender] = useState('');
  const [customSenderDisabled, setCustomSenderDisabled] = useState(false);
  const [message, setMessage] = useState('');
  const store = useContext(StoreContext);
  const isOpen = store.chatStore.getTestModalStatus();
  const names = Array.from(new Set(testMessages.map((message) => message.channelId)));

  const clickHandler = (): void => {
    store.chatStore.toggleTestModal();
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    setDefaultSender(e.target.value as string);
    setCustomSender('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomSender(e.target.value as string);
    setDefaultSender('');
  };

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value as string);
  };

  const sendHandler = (): void => {
    if (!defaultSender && !customSender) return;
    if (!message) return;

    const newMessage: Message = {
      id: Date.now(),
      roomId: defaultSender || customSender,
      channelId:defaultSender || customSender,
      body: message,
      ts: new Date(),
      isOut: false,
      isUnread: true,
    };

    store.chatStore.sendMessage(newMessage);

    setDefaultSender('');
    setCustomSender('');
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
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Box mt={2} sx={{ maxWidth: 200 }}>
                <FormControl fullWidth>
                  <InputLabel id="default-name-select">Names</InputLabel>
                  <Select
                    labelId="sender-label"
                    id="sender-name"
                    value={defaultSender}
                    label="Name"
                    onChange={handleSelectChange}
                  >
                    {names.map((item) => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                    <MenuItem value={''}>clear</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Box mt={2} sx={{ maxWidth: 200 }}>
                <TextField 
                  id="outlined-basic" 
                  label="Name" 
                  variant="outlined"
                  value={customSender}
                  onChange={handleChange}
                  disabled={defaultSenderDisabled}
                />
              </Box>
            </Grid>
          </Grid>

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
                  disabled={customSenderDisabled}
                />
            </FormControl>
          </Box>

          <Box mt={4} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <Button variant="contained" onClick={sendHandler}>
              Send message
            </Button>

            <Button onClick={clickHandler}>
              Close
            </Button>
          </Box>
        
        </DialogContent>
    </Dialog>    
  );
};

export default observer(TestModal);