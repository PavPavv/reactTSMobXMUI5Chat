import { useContext } from "react";
import { observer } from "mobx-react-lite";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//  logic
import { StoreContext } from "../../../store/StoreContext";

const UsernameBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.grey[700]}`,
  padding: theme.spacing(1),
  color: theme.palette.common.black,
  background: theme.palette.common.main,
  boxSizing: 'border-box',

  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(2),
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

type ChatNameProps = {
  username: string;
};

const ChatName = ({ username }: ChatNameProps): JSX.Element => {
  const store = useContext(StoreContext);

  const closeHandler = (): void => {
    store.mobStore.closeMobMenu();
  };
 
  return (
    <UsernameBlock>
      <Typography variant="h4">{username}</Typography>
      <CloseButton onClick={closeHandler}>
        <CloseIcon />
      </CloseButton>
    </UsernameBlock>
  );
};

export default observer(ChatName);