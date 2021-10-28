import { ThemeProvider } from '@mui/material';

//  logic
import { StoreContext } from './store/StoreContext';
import { rootStore } from './store/rootStore';

//  ui
import { theme } from './components/ui/theme';
import MainRouter from './main-router/main-router';


import './App.css';

const App = (): JSX.Element => {

  return (
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={theme}>
        <MainRouter />
      </ThemeProvider>
    </StoreContext.Provider>
    
  );
}

export default App;