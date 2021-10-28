import { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

//  logic
import { StoreContext } from '../../store/StoreContext';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type LoginProps = {
  goToLogin: () => void;
  goToForgottenPassword: () => void;
};

const SignUp = ({ goToLogin, goToForgottenPassword }: LoginProps): JSX.Element => {
  const store = useContext(StoreContext);
  const isLoading = store.authStore.isLoading;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (): void => {
    const enteredName = name;
    const enteredEmail = email;
    const enteredPassword = password;

    store.authStore.signUp(enteredName, enteredEmail, enteredPassword);
  };

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Sign Up</Typography>
      <Box component="form">
        <TextField 
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="off"
          autoFocus
          onChange={nameChangeHandler}
        />

        <TextField 
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          onChange={emailChangeHandler}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
          onChange={passwordChangeHandler}
        />

        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth onClick={submitHandler}>
          {isLoading ? <CircularProgress color="inherit" size={26} /> : 'Sign up'}
        </Button>
        <Grid container sx={{ marginTop: '30px', }}>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={goToForgottenPassword}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={goToLogin}>
              Already have an account?
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FormPaper>
  );
};

export default observer(SignUp);