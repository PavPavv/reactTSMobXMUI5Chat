import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const SendPanelWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: '44px',
  borderTop: `1px solid ${theme.palette.grey[700]}`,
}));

const SendPanelInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '44px',
  padding: '0 14px',
  border: 'none',
  outline: 'none',
}));

const SendPanel = (): JSX.Element => {
  
  const sendHandler = (): void => {
    console.log('send btn been clicked')
  };

  const changeHandler = (): void => {

  };

  return (
    <SendPanelWrap>
      <SendPanelInput 
        value="test"
        onChange={changeHandler}
      />
      <IconButton 
        size="large" 
        color="primary" 
        type="button"
        onClick={sendHandler}  
      >
        <SendRoundedIcon />
      </IconButton>
    </SendPanelWrap>
  );
};

export default SendPanel;