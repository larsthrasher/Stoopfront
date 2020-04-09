import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BusinessTwoTone from "@material-ui/icons/BusinessTwoTone";
import withStyles from "@material-ui/core/styles/withStyles";

const Navbar = ({ classes, router, pageProps: { auth } }) => {
  const { user = {} } = auth || {};


  return (
    <AppBar className={classes.appBar} position={router.pathname === '/' ?
    "fixed" : "static"}>
      <Toolbar>
        <BusinessTwoTone className={classes.icon}/>
        <Typography
          variant="h5"
          component="h1"
          className={classes.toolbarTitle}
        >
          Stoopfront
        </Typography>

        {!user._id ? (
          //Auth navigation
          <div>
            <Button>Profile</Button>
            <Button variant='outlined'>Sign out</Button>
          </div>
        ) : (
          <div>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
};

const styles = theme => ({
  appBar: {
    // z-index 1 higher than the fixed drawer in home page to clip it under the navigation
    zIndex: theme.zIndex.drawer + 1
  },
  toolbarTitle: {
    flex: 1
  },
  icon: {
    marginRight: theme.spacing.unit
  }
});

export default withStyles(styles)(Navbar);
