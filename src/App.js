import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

import Login from './components/Login'

import { useSearchParams } from './utils'

import config from './config'

import './App.css'

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  loginContainer: {
    width: "30%",
    height: "40vh"
  }
})


function App() {

  const classes = useStyles()

  const url = useSearchParams()

  const urlReturn = url.get('url_return')

  const urlLogin = config.urlLogin

  return (
    <div className={classes.container}>
      <div className={classes.loginContainer}>
        <Login urlReturn={urlReturn} urlLogin={urlLogin}/>
      </div>
    </div>
  );
}

export default App;
