import React, { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

//  logic
import { StoreContext } from '../../store/StoreContext';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type LoginProps = {
  goToSignUp: () => void;
  goToForgottenPassword: () => void;
};

const Login = ({ goToSignUp, goToForgottenPassword }: LoginProps): JSX.Element => {
  const store = useContext(StoreContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (): void => {
    console.log('login submit');
    const enteredEmail = email;
    const enteredPassword = password;

    store.authStore.signIn(enteredEmail, enteredPassword);
  };

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Log in</Typography>
      <Box component="form">
        <TextField 
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
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
          autoComplete="current-password"
          value={password}
          onChange={passwordChangeHandler}
        />
        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth onClick={submitHandler}>
          Log In
        </Button>
        <Grid container sx={{ marginTop: '30px', }}>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={goToForgottenPassword}>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" onClick={goToSignUp}>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </Box>
    </FormPaper>
  )
};

export default Login;