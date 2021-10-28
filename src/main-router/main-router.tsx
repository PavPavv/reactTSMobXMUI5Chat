import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

//  ui
import LoginPage from '../pages/LoginPage';
import ChatPage from '../pages/ChatPage';

const MainRouter = (): JSX.Element => {

  return (
    <>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" exact component={ChatPage} />
        <Redirect to="/" />
      </Switch>
    </>
  )
};

export default withRouter(MainRouter);