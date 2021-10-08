import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

const UsernameBlock = styled('div')(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.grey[700]}`,
  padding: theme.spacing(2),
  color: theme.palette.common.black,
  background: theme.palette.common.main,
}));

type ChatNameProps = {
  username: string;
};

const ChatName = ({ username }: ChatNameProps): JSX.Element => {
  return (
    <UsernameBlock>
      <Typography variant="h4">{username}</Typography>
    </UsernameBlock>
  );
};

export default ChatName;