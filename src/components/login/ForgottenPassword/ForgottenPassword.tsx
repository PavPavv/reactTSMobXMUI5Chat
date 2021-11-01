import { useContext } from 'react';
import { useFormik } from 'formik';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CircularProgress from '@mui/material/CircularProgress';

//  logic
import { StoreContext } from '../../../store/StoreContext';
import { validationRules, ChangePasswordValues } from './validation-rules';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type ForgottenPasswordProps = {
  goToSignUp: () => void;
  goToLogin: () => void;
};

const ForgottenPassword = ({ goToSignUp, goToLogin }: ForgottenPasswordProps): JSX.Element => {
  const store = useContext(StoreContext);
  const isLoading = store.authStore.isLoading;

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationRules,
    onSubmit: (values: ChangePasswordValues) => {
      const { password, confirmPassword } = values;
      console.log(`${password} = ${confirmPassword}`);
    },
  })
  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Reset password</Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="New password"
          type="password"
          id="password"
          autoComplete="off"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password ? true : false}
          helperText={formik.touched.password && formik.errors.password ? formik.errors.password : ''}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm password"
          type="password"
          id="confirm-password"
          autoComplete="off"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ''}
        />

        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth type="submit">
          {isLoading ? <CircularProgress color="inherit" size={26} /> : 'Reset password'}
        </Button>

        <Grid container sx={{ marginTop: '30px', }}>
          <Grid item xs>
            <Link href="#" variant="body2" onClick={goToLogin}>
              Back to sign in
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

export default ForgottenPassword;