import { styled } from '@mui/system';
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
}

const Message = ({ message }: MessageProps) => {
  return (
    <MessageWrap>
      <MessagePaper>
        <Typography>{message}</Typography>
        <Typography>18:20</Typography>
      </MessagePaper>
    </MessageWrap>
  );
};

export default Message;