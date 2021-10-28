import { useState, useEffect, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Container from '@mui/material/Container';

//  logic
import { StoreContext } from '../store/StoreContext';

//  ui
import Login from '../components/login/Login';
import SignUp from '../components/login/SignUp';
import ForgottenPassword from '../components/login/ForgottenPassword';
import LoginSuccess from '../components/login/LoginSuccess';

type LoginPageState = 'login' | 'signUp' | 'forgottenPassword';

const LoginPage = (): JSX.Element => {
  const store = useContext(StoreContext);
  const history = useHistory();
  const isSignUp = store.authStore.isSignUp;
  const isLoggedInStored = store.authStore.isLoggedIn;
  const isLoggedIn = localStorage.getItem('MY_CHAT_TOKEN');
  const [loginPage, setLoginPage] = useState<LoginPageState>('login');

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  }, [history, isLoggedIn]);

  useEffect(() => {
    if (isLoggedInStored) {
      history.push('/');
    }
  }, [history, isLoggedInStored]);

  const goToLoginHandler = (): void => {
    setLoginPage('login');
  };

  const goToSignUpHandler = (): void => {
    setLoginPage('signUp');
  };

  const goToforgottenPasswordHandler = (): void => {
    setLoginPage('forgottenPassword');
  };

  const authForm = (): JSX.Element => {
    if (!isSignUp) {
      if (loginPage === 'login') {
        return <Login goToSignUp={goToSignUpHandler} goToForgottenPassword={goToforgottenPasswordHandler} />;
      } else if (loginPage === 'signUp') {
        return <SignUp goToLogin={goToLoginHandler} goToForgottenPassword={goToforgottenPasswordHandler} />;
      } else if (loginPage === 'forgottenPassword') {
        return <ForgottenPassword goToLogin={goToLoginHandler} goToSignUp={goToSignUpHandler} />;
      }
    }

    return <LoginSuccess goToLogin={goToLoginHandler} />;
  }; 

  return (
    <Container maxWidth="sm" sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    }}>
      {authForm()}
    </Container>
  );
};

export default observer(LoginPage);