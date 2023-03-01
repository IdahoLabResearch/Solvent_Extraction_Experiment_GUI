// React
import * as React from 'react';
import { Link } from 'react-router-dom';

// Hooks
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Redux actions
import { appStateActions } from '../../app/store/index';

// MUI Styles
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';

// MUI Components
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Toolbar,
} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

// MUI Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TuneIcon from '@mui/icons-material/Tune';
import DashboardIcon from '@mui/icons-material/Dashboard';

// Styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../../src/styles/variables';

const drawerWidth = 265;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

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
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props: any) {
  const { children } = props;

  const theme = useTheme();
  const dispatch = useAppDispatch();

  type openDrawerLeftState = boolean;
  const openDrawerLeftState: openDrawerLeftState = useAppSelector((state: any) => state.appState.openDrawerLeft);

  type openDrawerLeftWidth = number;
  const openDrawerLeftWidth: openDrawerLeftWidth = useAppSelector((state: any) => state.appState.openDrawerLeftWidth);

  const handleToggleOpenDrawerLeft = () => {
    dispatch(appStateActions.toggleDrawerLeft());
  };

  return (
    <Drawer variant="permanent" open={openDrawerLeftState}>
      <DrawerHeader>
        <IconButton onClick={handleToggleOpenDrawerLeft}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        <ListItem component={Link} to="/" key="Math.random()" disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openDrawerLeftState ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openDrawerLeftState ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ opacity: openDrawerLeftState ? 1 : 0, color: COLORS.colorSecondary }} />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        <ListItem component={Link} to="/settings" key="Math.random()" disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: openDrawerLeftState ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: openDrawerLeftState ? 3 : 'auto',
                justifyContent: 'center',
              }}
            >
              <TuneIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ opacity: openDrawerLeftState ? 1 : 0, color: COLORS.colorSecondary }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}
