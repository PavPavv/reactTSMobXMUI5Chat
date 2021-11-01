import { createTheme } from "@mui/material";

import { Colors } from "./colors";

const corporateColors = {
  //  blue
  mainCorporate: Colors.Blue,
  mainCorporateLight: Colors.LightBlue,

  //  green
  secondCorporate: Colors.Green,
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: corporateColors.mainCorporateLight,
      main: corporateColors.mainCorporate,
    },
    secondary: {
      main: corporateColors.secondCorporate,
    },
    error: {
      main: Colors.Red,
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
  },

  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '45px!important',
        }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          '@media (max-width: 600px)': {
            fontSize: '0.9em',
          },

          '@media (max-width: 400px)': {
            fontSize: '0.8em',
          }
        }
      }
    }
  }
});