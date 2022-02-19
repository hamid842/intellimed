import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {Outlet} from "react-router-dom";

import MenuList from "./MenuList";
import logo from "@images/logo.png";
import ToolbarContent from "./ToolbarContent";
import colors from '@config/colors'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const {window} = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <>
            <img src={logo} alt="Logo"/>
            <MenuList/>
        </>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                    backgroundColor: `${colors.mainGray} !important`
                }}
                elevation={0}
            >
                <Toolbar>
                    <ToolbarContent handleDrawerToggle={handleDrawerToggle}/>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: {sm: drawerWidth},
                    backgroundColor: `${colors.mainGray} !important`,
                    flexShrink: {sm: 0},
                    borderRight: 'none !important'
                }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    elevation={0}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        borderRight: 'none !important',
                        backgroundColor: `${colors.mainGray} !important`,
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    elevation={0}
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            backgroundColor: `${colors.mainGray} !important`,
                            borderRight: 'none !important',
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}


export default ResponsiveDrawer;

