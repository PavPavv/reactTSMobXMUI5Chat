import { ThemeProvider } from '@mui/material';

//  logic
import { StoreContext } from './store/StoreContext';
import { rootStore } from './store/rootStore';

//  ui
import { theme } from './components/ui/theme';
import ChatPage from './pages/ChatPage';


import './App.css';

const App = (): JSX.Element => {

  return (
    <StoreContext.Provider value={rootStore}>
      <ThemeProvider theme={theme}>
        <ChatPage />
      </ThemeProvider>
    </StoreContext.Provider>
    
  );
}

export default App;