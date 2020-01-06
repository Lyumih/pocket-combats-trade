import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Trade from './components/calculator';
import { AppBar, Toolbar, Typography, CssBaseline, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from './components/link'
import Home from './components/home';

function App() {
  const drawerWidth = 240;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  }));
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        <Link to="/">
            <Button>
              <Typography>Pocket Combats</Typography>
            </Button>
          </Link>

          <Link to="/calculator">
            <Button>
              <Typography>Калькулятор</Typography>

            </Button>
          </Link>
          <Link to="/trade">
            <Button>
              <Typography>Торговля</Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
      <div className={classes.toolbar} />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/calculator" exact>
            <Calculator />
          </Route>
          <Route path="/trade" exact>
            <Trade />
          </Route>
        </Switch>
      </main>

    </div>
  );
}

export default App;
