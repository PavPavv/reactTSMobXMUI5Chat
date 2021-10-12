import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MessageWrap = styled('div')( ({theme}) => ({
  display: 'flex',
  width: '100%',
}));

const MessagePaper = styled(Paper)( ({ theme }) => ({
  maxWidth: '80%',
  padding: theme.spacing(1),
}));

type MessageProps = {
  message: string;
  time: string;
  isOut: boolean;
}

const Message = ({ message, time, isOut }: MessageProps) => {
  const theme = useTheme();

  return (
    <MessageWrap style={{ justifyContent: isOut ? 'flex-end' : 'flex-start' }}>
      <MessagePaper style={
        { 
          color: isOut ? theme.palette.common.white : theme.palette.common.black,
          backgroundColor: isOut ? theme.palette.secondary.main : theme.palette.grey[700],
        }
      }>
        <Typography>{message}</Typography>
        <Typography variant="caption" display="block" align="right">{time}</Typography>
      </MessagePaper>
    </MessageWrap>
  );
};

export default Message;