import { useContext } from 'react';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeUnstyled from '@mui/core/BadgeUnstyled';

//  logic
import { StoreContext } from '../../../store/StoreContext';

const ViewPaper = styled(Paper)(({ theme, ...props }) => ({
  width: '100%',
  padding: theme.spacing(1),
  borderRadius: '4px',
  boxSizing: 'border-box',
  boxShadow: 'none',
  cursor: 'pointer',
  transition: 'linear .1s',

  '&:hover': {
    background: theme.palette.primary.light,
  }
}));

const ViewBadge = styled(BadgeUnstyled)(({ theme }) => ({
  width: 18,
  height: 18,
  borderRadius: '50%',
  boxSizing: 'border-box',
  marginRight: 6,
  textAlign: 'center',
  lineHeight: '28px',
  color: theme.palette.common.white,
  background: theme.palette.primary.main,
}));

const CommentPreviewWrap = styled('div')(({ theme }) => ({
  display: 'inline-block',
  maxWidth: 240,
  height: 50,
  marginTop: 6,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
}));

type ChatPrevieProps = {
  name: string;
  message: string;
  time: string;
  latestSpeaker: string;
  msgsCount: number;
  isRoomSelected: boolean;
};

const ChatPreview = ({name, message, time, latestSpeaker, msgsCount, isRoomSelected }: ChatPrevieProps): JSX.Element => {
  const theme = useTheme();
  const store = useContext(StoreContext);

  const clickHandler = (): void => {
    store.chatStore.setSelectedChat(name);
  };

  return (
    <ViewPaper onClick={clickHandler}
      style={{ background: isRoomSelected ? theme.palette.primary.light : '' }}
    >
      <Grid container >

        <Grid item xs={1}>
          <AccountCircleIcon color="disabled" fontSize="large" />
        </Grid>

        <Grid item  xs={11} sx={{ padding: '0 0 0 12px', }}>

          <Grid item container>
            <Grid item xs={9}>
              <Typography variant="h5">{name}</Typography>
            </Grid>
            <Grid item xs={3} container direction="row">
              <ViewBadge>
                <Typography variant="subtitle2">{msgsCount}</Typography>
              </ViewBadge>
              <Typography variant="subtitle2">{time}</Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Grid item container direction="row">
              <CommentPreviewWrap>
                <strong>{latestSpeaker}</strong>
                <span> - </span>
                <span>{message}</span>
              </CommentPreviewWrap>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </ViewPaper>
  );
};

export default ChatPreview;