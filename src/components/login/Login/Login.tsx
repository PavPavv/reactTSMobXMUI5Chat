import React, { useState, useContext } from 'react';
import { observer } from "mobx-react-lite";
import { useFormik } from 'formik';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { validationRules, LoginValues } from './validation-rules';

//  ui
import FormErrorMessage from '../../ui/FormErrorMessage/FormErrorMessage';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type LoginProps = {
  goToSignUp: () => void;
  goToForgottenPassword: () => void;
};

const Login = ({ goToSignUp, goToForgottenPassword }: LoginProps): JSX.Element => {
  const store = useContext(StoreContext);
  const isLoading = store.authStore.isLoading;
  const [loginSuccess, setLoginSuccess] = useState(true);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationRules,
    onSubmit: (values: LoginValues) => {
      const { email, password } = values;
      store.authStore.logIn(email, password);
      setLoginSuccess(store.authStore.isLoggedIn);
    },
  });

  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Log in</Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField 
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email ? true : false}
          helperText={formik.touched.email && formik.errors.email ? 'Invalid email' : ''}
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
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password ? true : false}
          helperText={formik.touched.password && formik.errors.password ? 'Invalid password' : ''}
        />
        {loginSuccess ? null : <FormErrorMessage>Incorrect email or password</FormErrorMessage>}
        
        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth type="submit">
          {isLoading ? <CircularProgress color="inherit" size={26} /> : 'Log In'}
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

export default observer(Login);