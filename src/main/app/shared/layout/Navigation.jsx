import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MicNoneOutlinedIcon from "@material-ui/icons/MicNoneOutlined";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// ====
import logo from "src/main/content/images/logo.png";
import colors from "src/main/app/config/colors";
import ToolbarContent from "./ToolbarContent";
import MenuList from "./MenuList";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: colors.mainGrey,
    height: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    color: "grey",
    boxShadow: "none",
    backgroundColor: colors.mainGrey,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: colors.mainGrey,
      height: 120,
    },
  },

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: colors.mainGrey,
    borderRight: "none",
    overflowX: "hidden",
  },
  content: {
    marginTop: 110,
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: colors.mainGrey,
  },
  micIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    color: colors.mainGrey,
    backgroundColor: colors.darkBlue,
    marginTop: 20,
    marginBottom: 20,
  },
  calendar: {
    position: "absolute",
    right: 0,
    top: 0,
    marginTop: 133,
    marginRight: 10,
  },
}));

const ResponsiveDrawer = (props) => {
  const { window, children } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <img src={logo} alt="Logo" className={classes.logo} />
      <Grid container spacing={1} alignItems="center">
        <Grid item className="ml-2">
          <MicNoneOutlinedIcon className={classes.micIcon} />
        </Grid>
        <Grid item>
          <Typography className="mt-4 mb-4">Emergency Help</Typography>
        </Grid>
      </Grid>
      <div className={classes.toolbar} />

      {/* <Divider /> */}
      <MenuList />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <ToolbarContent handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
