// rubia-client\src\layouts\DashLayout.jsx
import React, { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme, alpha } from "@mui/material/styles";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 240;

const ROTOM_RED = "#cc0000";
const ROTOM_CYAN = "#00E5FF";
const ROTOM_DARK = "#1A1A1A";

const dashboardNavItems = [
  { label: "Dashboard", title: "RotomPC Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Reports", title: "RotomPC Analytics & Reports", to: "/dashboard/reports", icon: AssessmentIcon },
  { label: "Users", title: "RotomPC User Management", to: "/dashboard/users", icon: PeopleIcon },
];

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  height: '84px', // Increased to accommodate the hardware strip height
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: '#f3f4f6', // Match NavBar background
  color: '#000',
  boxShadow: 'none',
  borderBottom: '6px solid #1A1A1A',
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": {
      ...openedMixin(theme),
      backgroundColor: ROTOM_DARK,
      color: "#FFFFFF",
      borderRight: `4px solid #1A1A1A`,
    },
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": {
      ...closedMixin(theme),
      backgroundColor: ROTOM_DARK,
      color: "#FFFFFF",
      borderRight: `4px solid #1A1A1A`,
    },
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: '8px',
  border: '2px solid #1A1A1A',
  backgroundColor: alpha(theme.palette.common.white, 0.5),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.8),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: ROTOM_RED
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontWeight: 'bold',
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    fontSize: '0.8rem',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const DashLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const activeItem = dashboardNavItems.find(item => item.to === location.pathname);
  const pageTitle = activeItem ? activeItem.title : "DASHBOARD";

  const handleDrawerToggle = () => setOpen(!open);
  const handleLogout = () => navigate("/");

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#e5e7eb" }}>
      <CssBaseline />
      
      <AppBar position="fixed" open={open}>
        {/* Upper Hardware Strip (The "Status LEDs") */}
       <Box sx={{ display: 'flex', height: 24, width: '100%', alignItems: 'center', gap: 1.5, bgcolor: '#cc0000', px: 3, borderBottom: '2px solid rgba(0,0,0,0.2)' }}>
       <Box sx={{ height: 12, width: 12, borderRadius: '50%', border: '2px solid #fff', bgcolor: '#60a5fa', boxShadow: '0 0 8px #60a5fa', animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', '@keyframes pulse': { '0%, 100%': { opacity: 1 }, '50%': { opacity: .5 } } }} />
          <Box sx={{ display: 'flex', gap: 0.75 }}>
            <Box sx={{ height: 8, width: 8, borderRadius: '50%', bgcolor: '#ff1c1c', border: '1px solid rgba(0,0,0,0.2)' }} /><Box sx={{ height: 8, width: 8, borderRadius: '50%', bgcolor: '#ffcb05', border: '1px solid rgba(0,0,0,0.2)' }} /><Box sx={{ height: 8, width: 8, borderRadius: '50%', bgcolor: '#4dad5b', border: '1px solid rgba(0,0,0,0.2)' }} />
          </Box>
          <Box sx={{ ml: 'auto', display: 'flex', gap: 2 }}>
             <Box sx={{ height: 4, width: 48, borderRadius: 2, bgcolor: 'rgba(0,0,0,0.2)' }} />
         </Box>
       </Box>

        <Toolbar sx={{ py: 1 }}>
          <IconButton
            onClick={handleDrawerToggle}
            edge="start"
            sx={{ 
              marginRight: 3, 
              color: '#fff', 
              bgcolor: ROTOM_DARK, 
              '&:hover': { bgcolor: ROTOM_RED },
              borderRadius: '8px',
              border: '2px solid #000'
            }}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          
          {/* Logo / Title Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
             <Box className="group" sx={{ relative: 'true', display: 'flex', height: 48, width: 48, alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '4px solid #18181b', bgcolor: '#27272a', boxShadow: '4px 4px 0px 0px rgba(0,0,0,0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'rotate(12deg)' } }}>
              <Box sx={{ height: 32, width: 32, borderRadius: '50%', border: '2px solid #93c5fd', background: 'linear-gradient(to top right, #2563eb, #60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                <Box sx={{ position: 'absolute', top: 4, left: 8, height: 16, width: 16, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)', filter: 'blur(1px)' }} />
                <Box sx={{ height: '100%', width: 4, bgcolor: 'rgba(255,255,255,0.1)', transform: 'rotate(45deg)' }} />
              </Box>
            </Box>
             <Typography variant="h6" noWrap sx={{ fontWeight: 900, textTransform: 'uppercase', fontStyle: 'italic', letterSpacing: -1, color: '#1A1A1A' }}>
              {pageTitle.split(' ')[0]}<span style={{ color: '#cc0000' }}>{pageTitle.split(' ')[1] || ''}</span>
            </Typography>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="SEARCH..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Button 
            onClick={handleLogout} 
            sx={{ 
              ml: 2, 
              bgcolor: '#fff', 
              color: '#1A1A1A', 
              fontWeight: 'black',
              border: '2px solid #1A1A1A',
              boxShadow: '3px 3px 0px #000',
              textTransform: 'uppercase',
              fontStyle: 'italic',
              fontSize: '10px',
              px: 2,
              '&:hover': { bgcolor: ROTOM_RED, color: '#fff', transform: 'translateY(-1px)', boxShadow: '4px 4px 0px #000' },
              '&:active': { transform: 'translateY(1px)', boxShadow: 'none' }
            }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)} sx={{ color: ROTOM_RED, border: '2px solid #cc0000', mr: 1 }}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
        <List sx={{ px: 1 }}>
          {dashboardNavItems.map(({ label, to, icon: Icon }) => (
            <ListItem key={to} disablePadding sx={{ display: "block", mb: 1 }}>
              <ListItemButton
                component={Link}
                to={to}
                selected={location.pathname === to}
                sx={{
                  minHeight: 48,
                  borderRadius: '8px',
                  justifyContent: open ? "initial" : "center",
                  border: '2px solid transparent',
                  "&.Mui-selected": {
                    backgroundColor: "#000",
                    borderColor: ROTOM_CYAN,
                    color: ROTOM_CYAN,
                    boxShadow: `inset 0px 0px 8px ${alpha(ROTOM_CYAN, 0.4)}`,
                    "& .MuiListItemIcon-root": { color: ROTOM_CYAN },
                    "&:hover": { backgroundColor: "#111" }
                  },
                  "&:hover": {
                    backgroundColor: alpha(ROTOM_RED, 0.1),
                    color: ROTOM_RED,
                    "& .MuiListItemIcon-root": { color: ROTOM_RED }
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "#666"
                  }}
                >
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={label}
                  sx={{ 
                    opacity: open ? 1 : 0,
                    "& .MuiTypography-root": { 
                      fontWeight: 900, 
                      textTransform: 'uppercase', 
                      fontStyle: 'italic', 
                      fontSize: '0.75rem',
                      letterSpacing: 1
                    } 
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        {/* Bottom Hardware Detail */}
        {open && (
           <Box sx={{ mt: 'auto', p: 2, textAlign: 'center', opacity: 0.5 }}>
              <Box sx={{ height: 4, w: '100%', bgcolor: '#333', borderRadius: 2, mb: 1 }} />
              <Typography variant="caption" sx={{ fontWeight: 'bold', color: '#555' }}>v2.0-ROTOM-OS</Typography>
           </Box>
        )}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <DrawerHeader />
        <Box sx={{ mt: 2 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default DashLayout;