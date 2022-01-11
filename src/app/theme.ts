import { PaletteMode } from "@mui/material";

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    specialities: {
      mea: string,
      ig: string,
      do: string,
      egc: string,
      gba: string,
      mat: string,
      mi: string,
      msi: string,
      peip: string,
      se: string,
      ste: string
    }
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    specialities?: {
      mea?: string,
      ig?: string,
      do?: string,
      egc?: string,
      gba?: string,
      mat?: string,
      mi?: string,
      msi?: string,
      peip?: string,
      se?: string,
      ste?: string
    };
  }
}

const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      primary: {
        main: '#029bde',
      },
      secondary: {
        main: '#003a79',
      },
      error: {
        main: '#f44336',
      },
      specialities: {
        mea: '#7869a7',
        ig: '#ec008c',
        do: '#821980',
        egc: '#f5821f',
        gba: '#91a23d',
        mat: '#33b199',
        mi: '#b8491e',
        msi: '#6488a1',
        peip: '#009ee0',
        se: '#388596',
        ste: '#0f75bc',
      }
    }
  });



export default getDesignTokens;