import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Card, CardContent, TextField, Button, CardHeader, CardActions, Typography, CircularProgress } from '@material-ui/core'

import Axios from 'axios'

import classnames from 'classnames'

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 40
    },
    inputsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginTop: 5
    }
})

const Login = ({urlReturn, urlLogin}) => {

    const classes = useStyles()

    const [username, setUsername] = useState('')
    
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        if(username && password && urlReturn){
            beginLoading()
            Axios.post(urlLogin, {username, password})
                .then((data) => {
                    redirect()
                }).catch((error) => {
                    setError(error.response.statusText)
                }).finally(() => {
                    setLoading(false)
                })
        }
    }

    const redirect = () => {
        window.location.replace(urlReturn)
    }

    const beginLoading = () => {
        setError('')
        setLoading(true)
    }

    return (
        <Card className={classes.container}>
            <CardHeader title="Login"/>

            <CardContent>
                <form className={classes.inputsContainer}>
                    <TextField className={classes.input} label="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <TextField className={classes.input} label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {
                        loading && <CircularProgress style={{alignSelf: 'center'}} className={classes.input}/>
                    }
                    
                    {
                        error && <Typography className={classnames([classes.messageError, classes.input])} color="error">{error}</Typography> 
                    }
                </form>
            </CardContent>

            <CardActions>
                <Button color="primary" variant="contained" fullWidth onClick={handleLogin}>Entrar</Button>
            </CardActions>
        </Card>
    )
}

export default Login