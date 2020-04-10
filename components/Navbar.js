import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BusinessTwoTone from "@material-ui/icons/BusinessTwoTone";
import withStyles from "@material-ui/core/styles/withStyles";

import ActiveLink from './ActiveLink';
import { signoutUser } from '../lib/auth';


const Navbar = ({ classes, router, pageProps: { auth } }) => {
  const { user = {} } = auth || {};


  return (
    <AppBar className={classes.appBar} position={router.pathname === '/' ?
    "fixed" : "static"}>
      <Toolbar>
        <ActiveLink href="/">
          <BusinessTwoTone className={classes.icon}/>
        </ActiveLink>
        <Typography
          variant="h5"
          component="h1"
          className={classes.toolbarTitle}
        >
          <ActiveLink href="/">
            Stoopfront
          </ActiveLink>
        </Typography>

        {user._id ? (
          //Auth navigation
          <div>
            <Button>
              <ActiveLink href='/profile'>Profile</ActiveLink>
            </Button>
            <Button onClick={signoutUser} variant='outlined'>Sign out</Button>
          </div>
        ) : (
          //Unauth
          <div>
            <Button>
              <ActiveLink href='/signin'>Sign in</ActiveLink>
            </Button>
            <Button>
              <ActiveLink href='/signup'>Sign up</ActiveLink>
            </Button>
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
