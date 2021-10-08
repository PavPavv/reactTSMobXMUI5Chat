import { useContext } from 'react';
import { observer } from "mobx-react-lite";
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

//  logic
import { StoreContext } from '../../../store/StoreContext';

interface AppBarProps extends MuiAppBarProps {
  //
}



const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  height: '100px',
}));

const TopIconButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  
  [theme.breakpoints.down('lg')]: {
    display: 'block',
  },
}));

const RoomBar = (): JSX.Element => {
  const store = useContext(StoreContext);
  const name = store.chatStore.selectedChat;

  const menuHandler = (): void => {
    store.mobStore.toggleMobMenu();
  };

  return (
    <MuiAppBar sx={{ position: 'relative', boxShadow: 'none', }}>
      <Toolbar
        sx={{
          borderBottomColor: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.grey[700]
              : theme.palette.grey[900],
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          color: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.common.black
              : theme.palette.common.black,
          backgroundColor: (theme) => 
            theme.palette.mode === 'light'
              ? theme.palette.common.white
              : theme.palette.grey[900],
        }}
      > 
        <TopIconButton
          edge="start"
          color="inherit"
          onClick={menuHandler}
        >
          <MenuIcon />
        </TopIconButton>  
        <Typography variant="h4">{name}</Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default observer(RoomBar);