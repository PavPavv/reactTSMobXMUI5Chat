import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const FormPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

type ForgottenPasswordProps = {
  goToSignUp: () => void;
  goToLogin: () => void;
};

const ForgottenPassword = ({ goToSignUp, goToLogin }: ForgottenPasswordProps): JSX.Element => {
  return (
    <FormPaper elevation={3} >
      <Typography variant="h4" align="center">Reset password</Typography>
      <Box component="form">

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="New password"
          type="password"
          id="password"
          autoComplete="off"
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
        />

        <Box mt={2} />
        <Button variant="contained" size="large" fullWidth>
          Reset password
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