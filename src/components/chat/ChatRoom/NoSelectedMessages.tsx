import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Box } from "@mui/system";

//  logic
import { StoreContext } from "../../../store/StoreContext";

const NoMessages = styled('section')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
}));

const ChatButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const NoSelectedMessages = (): JSX.Element => {
  const store = useContext(StoreContext);

  const clickHandler = (): void => {
    store.mobStore.toggleMobMenu();
  };
  
  return (
    <NoMessages>
      <Paper elevation={3} sx={{
        borderRadius: 16,
        padding: (theme) => 
            theme.spacing(1),
        backgroundColor: (theme) => 
          theme.palette.mode === 'light'
            ? theme.palette.common.white
            : theme.palette.grey[900],    
      }}>
        <Typography variant="h4">Select a chat to start messaging</Typography>
      </Paper>
      <Box mt={2}>
        <ChatButton variant="contained" onClick={clickHandler}>
          Open chat list
        </ChatButton>
      </Box>
    </NoMessages>
  );
};

export default observer(NoSelectedMessages);