import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const NoMessages = styled('section')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minHeight: '100vh',
}));

const NoSelectedMessages = (): JSX.Element => {
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
    </NoMessages>
  );
};

export default NoSelectedMessages;