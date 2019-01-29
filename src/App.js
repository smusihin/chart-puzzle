import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Main from './components/base/Main'


const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
  typography: { useNextVariants: true },
});

class App extends React.Component { 

  render = ()=>{
    return (
    <MuiThemeProvider theme={theme}>
      <Main/>
    </MuiThemeProvider>
  );
  }
  
}

export default App;
