// React
import * as React from 'react';

// Hooks
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Redux actions
import { appStateActions } from '../../app/store/index';

// MUI Styles
import { styled } from '@mui/material/styles';

// MUI Components
import {
  IconButton,
  Toolbar,
  Typography
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: useAppSelector((state: any) => state.appState.openDrawerLeftWidth),
    width: `calc(100% - ${useAppSelector((state: any) => state.appState.openDrawerLeftWidth)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Header(props: any) {
  const dispatch = useAppDispatch();

  type openDrawerLeftState = boolean;
  const openDrawerLeftState: openDrawerLeftState = useAppSelector((state: any) => state.appState.openDrawerLeft);

  type openDrawerLeftWidth = number;
  const openDrawerLeftWidth: openDrawerLeftWidth = useAppSelector((state: any) => state.appState.openDrawerLeftWidth);

  const handleToggleOpenDrawerLeft = () => {
    dispatch(appStateActions.toggleDrawerLeft());
  };

  return (
    <AppBar position="fixed" open={openDrawerLeftState}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggleOpenDrawerLeft}
          edge="start"
          sx={{
            marginRight: 5,
            ...(openDrawerLeftState && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h1" noWrap component="div">
          BCTC GUI
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
