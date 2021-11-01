import { useState, useContext } from 'react';
import { useFormik } from 'formik';
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
import { StoreContext } from '../../../store/StoreContext';
import { validationRules, SignUpValues } from './validation-rules';

//  ui
import FormErrorMessage from '../../ui/FormErrorMessage/FormErrorMessage';

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
  const [signUpSuccess, setSignUpSuccess] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validationRules,
    onSubmit: (values: SignUpValues) => {
      const { name, email, password } = values;
      store.authStore.signUp(name, email, password);
      setSignUpSuccess(store.authStore.isSignUp);
    },
  })

  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Sign Up</Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField 
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="off"
          autoFocus
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && formik.errors.name ? true : false}
          helperText={formik.touched.name && formik.errors.name ? 'Invalid name' : ''}
        />

        <TextField 
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
          autoComplete="off"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password ? true : false}
          helperText={formik.touched.password && formik.errors.password ? 'Invalid password' : ''}
        />
        
        {signUpSuccess ? null : <FormErrorMessage>Incorrect fields</FormErrorMessage>}

        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth type="submit">
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