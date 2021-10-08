import { createTheme } from "@mui/material";

import { Colors } from "./colors";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: Colors.LightBlue,
      main: Colors.Blue,
    },
    grey: {
      '500': Colors.LightGrey,
      '700': Colors.Grey,
      '800': Colors.MidGrey,
      '900': Colors.HeavyGrey,
    },
    text: {
      primary: Colors.Black,
    }
  },

  typography: {
    h2 : {

    },
    h3: {

    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    subtitle1: {

    },
    subtitle2: {
      fontSize: 12,
      fontWeight: 700,
    }
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '45px!important',
        }
      }
    }
  }
});