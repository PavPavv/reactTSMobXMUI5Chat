import { useEffect, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

//  logic
import { StoreContext } from '../../../store/StoreContext';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type SignUpSuccessProps = {
  goToLogin: () => void;
};

const SignUpSuccess = ({ goToLogin }: SignUpSuccessProps): JSX.Element => {
  const store = useContext(StoreContext);

  useEffect(() => {
    let timer = setTimeout(() => {
      store.authStore.setIsSignUpToFalse();
      goToLogin();
    }, 4000);

    return () => {
      clearTimeout(timer);
    }
  }, []);

  return (
    <FormPaper elevation={3} >
      <Typography variant="subtitle1">Congrats! You are successfully registered! You will be redirected to the log in page! :)</Typography>
    </FormPaper>
  );
};

export default observer(SignUpSuccess);