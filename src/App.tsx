// React
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

// Hooks
import { useAppSelector, useAppDispatch } from './app/hooks/reduxTypeScriptHooks';

// Import Packages
import "@fontsource/source-sans-pro/700.css"; // Weight 700.
// import "@fontsource/open-sans/900-italic.css"; // Italic variant.

// MUI Styles
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

// MUI Components
import {
  CssBaseline,
  PaletteMode
} from '@mui/material';

// Custom Components
import MainScaffold from './layouts/MainScaffold';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

// Styles
import './styles/App.scss';
// @ts-ignore
import COLORS from './styles/variables';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    // primary: {
    //   main: 'rgb(18, 18, 18)',
    // },
    error: {
      main: COLORS.colorError
    },
    background: {
      default: 'rgb(18, 18, 18)',
      paper: 'rgb(18, 18, 18)',
    },
    text: {
      ...(mode === 'light'
        ? {
            primary: '#000000',
            secondary: '#333',
          }
        : {
            primary: 'rgb(255, 255, 255)',
            secondary: '#999',
          }),
    },
    'card-gray': '#1e1e1e',
  },
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: '#1e1e1e',
          backgroundImage: 'none',
          boxShadow: 'none',
        },
      },
    },
  },
  transitions: {
    duration: {
      enteringScreen: 400,
      leavingScreen: 400,
    },
  },
});

function App() {
  const theme = useTheme();

  theme.typography.h1 = {
    fontSize: '1rem',
  };

  theme.typography.h2 = {
    fontSize: '1.5rem',
  };

  theme.typography.h3 = {
    fontSize: '1.25rem',
  };

  theme.typography.h4 = {
    fontSize: '1rem',
  };

  theme.typography.h5 = {
    fontSize: '1rem',
  };

  theme.typography.h6 = {
    fontSize: '1rem',
  };

  return (
    <div className="App">
      <CssBaseline>
        <MainScaffold>
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </MainScaffold>
      </CssBaseline>
    </div>
  );
}

const darkModeTheme = createTheme(getDesignTokens('dark'));

export default function DarkThemeWithCustomPalette() {
  type stageList = Array<{ [key: string]: any; }>;
  const stageList: stageList = useAppSelector((state) => state.stages.stageList);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(stagesActions.setStages());
  // });
  return (
    <ThemeProvider theme={darkModeTheme}>
      <App />
    </ThemeProvider>
  );
}
