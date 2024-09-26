{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Packages
import { v4 as uuidv4 } from 'uuid';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';

// MUI Components
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Tooltip,
  Typography,
} from '@mui/material';


// MUI Icons
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GppGoodIcon from '@mui/icons-material/GppGood';
import InfoIcon from '@mui/icons-material/Info';
import SourceIcon from '@mui/icons-material/Source';
import SettingsIcon from '@mui/icons-material/Settings';

// Custom Components
import DrawerContentsComponents from '../../layouts/drawercontents/DrawerContentsComponents';
import DrawerContentsSafeguards from '../../layouts/drawercontents/DrawerContentsSafeguards';
import DrawerContentsSettings from '../../layouts/drawercontents/DrawerContentsSettings';
import DrawerContentsSources from '../../layouts/drawercontents/DrawerContentsSources';

// Styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

type Props = {};

const DrawerLeft: React.FC<Props> = ({}) => {

  const [selected, setSelected] = useState('safeguards');

  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   async function getNodes() {
  //     const token = localStorage.getItem('user.token');

  //     await axios.get ( `${location.origin}/containers/${containerId}/graphs/nodes`,
  //       {
  //         headers: {
  //           Authorization: token
  //         }
  //       }).then (
  //         (response: any) => {
  //           setNodes(queryFilterData(searchQuery, response.data.value))
  //         }
  //       )
  //   }

  //   getNodes();
  // }, []);

  type openDrawerLeftState = boolean;
  const openDrawerLeftState: openDrawerLeftState = useAppSelector((state: any) => state.appState.openDrawerLeft);

  type openDrawerLeftWidth = number;
  const openDrawerLeftWidth: openDrawerLeftWidth = useAppSelector((state: any) => state.appState.openDrawerLeftWidth);

  const handleToggleOpenDrawerLeft = () => {
    dispatch(appStateActions.toggleDrawerLeft());
    if (openDrawerLeftWidth === 64) {
      dispatch(appStateActions.setDrawerLeftWidth(450));
    } else if (openDrawerLeftWidth === 450 || openDrawerLeftWidth === 800) {
      dispatch(appStateActions.setDrawerLeftWidth(64));
    }
  };

  // Menu links and menu link selection
  const menuLinkList = [
    {
      title: 'Safeguards Assessment',
      icon: GppGoodIcon,
      pane: 'safeguards'
    },
    {
      title: 'Components',
      icon: DeviceHubIcon,
      pane: 'components'
    },
    {
      title: 'Sources',
      icon: SourceIcon,
      pane: 'sources'
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      pane: 'settings'
    },
  ]

  const handleSelectMenuLink = (selectedLink: string) => {
    setSelected(selectedLink);
    if (openDrawerLeftState === false) {
      dispatch(appStateActions.toggleDrawerLeft());
    }
    dispatch(appStateActions.setDrawerLeftWidth(450));
  };

  // Component display switching
  const menuItemMatchesComponent = (pane: string) => selected === pane;

  return (
    <Drawer variant="permanent" open={openDrawerLeftState}
      sx={{
        position: 'relative',
        height: 'auto',
        display: 'flex',
        '& > .MuiDrawer-paper': {
          backgroundColor: COLORS.colorCardGray,
          border: 'none',
          position: 'relative',
          height: 'auto',
          display: 'flex',
        },
        ...(openDrawerLeftState === true && {
          transition: 'width .4s',
          width: openDrawerLeftWidth,
          '& .MuiDrawer-paper': {
            transition: 'width .4s',
            width: openDrawerLeftWidth
          }
        }),
        ...(openDrawerLeftState === false && {
          transition: 'width .4s',
          width: '64px',
          '& .MuiDrawer-paper': {
            transition: 'width .4s',
            width: '64px'
          }
        })
      }}
    >
      <Box
        component="div"
        sx={{ display: 'flex', height: '100%', flexDirection: 'row'}}
      >
        <Box
          component="div"
          sx={{ width: '64px', height: '100%' }}
        >
          <List sx={{ p: 0 }}>
            {/* Hamburger menu icon to open and close Drawer */}
            <ListItem key={uuidv4()} disablePadding>
              <ListItemButton
                sx={{
                  minHeight: 64,
                  px: 2.5,
                  backgroundColor: `${COLORS.colorPrimary} !important`,
                  '&.Mui-selected': {
                    backgroundColor: `${COLORS.colorSecondary} !important`
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: `${COLORS.colorSecondary} !important`
                  },
                  '&:hover': {
                    backgroundColor: `${COLORS.colorSecondary} !important`
                  }
                }}
                onClick={handleToggleOpenDrawerLeft}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {openDrawerLeftState ? <MenuOpenIcon /> : <MenuIcon />}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>

            {/* Drawer Menu link list */}
            {menuLinkList.map((menuLinkItem, index) => {
              const MenuLinkItemIcon = menuLinkItem.icon;
              return (
                <ListItem key={uuidv4()} disablePadding>
                  <ListItemButton
                    sx={{
                      minHeight: 64,
                      px: 2.5,
                      '&.Mui-selected': {
                        backgroundColor: `${COLORS.colorListSelectBlue} !important`
                      },
                      '&.Mui-focusVisible': {
                        backgroundColor: `${COLORS.colorListSelectBlue} !important`
                      },
                      '&:hover': {
                        backgroundColor: `${COLORS.colorListSelectBlue} !important`
                      }
                    }}
                    selected={menuItemMatchesComponent(menuLinkItem.pane)}
                    onClick={() => handleSelectMenuLink(menuLinkItem.pane)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <MenuLinkItemIcon />
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        </Box>
        <Box
          component="div"
          sx={{
            display: 'flex',
            flex: '1 1 100%',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          <Box
            component="div"
            sx={{
              flex: '1, 1, auto',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '16px 16px 4px' }}
            >
            <Typography
              variant="h3"
              sx={{
                alignItems: 'center',
                padding: '0px'
              }}
            >
              { selected === 'safeguards' ? 'Safeguards Assessment'
                : selected === 'components' ? 'System Components'
                : selected === 'sources' ? 'Sources'
                : selected === 'settings' ? 'Settings'
                : null
              }
            </Typography>
            <Tooltip title={
              selected === 'safeguards' ? 'View safeguards notifications'
              : selected === 'components' ? 'View system component health'
              : selected === 'sources' ? 'View and change Sources'
              : selected === 'settings' ? 'View and edit Settings'
              : null
            }>
              <InfoIcon
                sx={{
                  marginLeft: '10px',
                  marginRight: '10px',
                  height: '15px',
                  width: '15px'
                }}
              />
            </Tooltip>
          </Box>
          <Box
            component="div"
            sx={{ overflowY: 'scroll'}}
          >
            {selected === 'safeguards' && 
              <DrawerContentsSafeguards />
            }
            {selected === 'components' && 
              <DrawerContentsComponents />
            }
            {selected === 'sources' && 
              <DrawerContentsSources />
            }
            {selected === 'settings' && 
              <DrawerContentsSettings />
            }
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}

export default DrawerLeft;
