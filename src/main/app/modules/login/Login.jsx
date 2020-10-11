import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import colors from '../../config/colors'
import Tabs from './Tabs'
import logo from '../../../content/images/logo.png'

const useStyles = makeStyles((theme)=>({

    darker:{
        position: 'fixed',
        top: '-95%',
        left:'-12%',
        width: '150%',
        height: '150%',
        background: colors.darkBlue,
        WebkitTransform: 'rotate(25deg)',
        transform: 'rotate(25deg)',
        [theme.breakpoints.down("xs")]: {
            display:'none'
           },
    },
    logoContainer:{
       position:'absolute',
       backgroundColor:'transparent',
       top:'61%',
       left:'10%',
       [theme.breakpoints.down("xs")]: {
        top:10
       },
    }
})) 

const Login = ()=> {
    const classes = useStyles()
    return (
        <>
        <div className={classes.darker}></div> 
             <Grid container justify='center' >
                 <Grid item xs={12} sm={12} lg={12}>
                     <Tabs />
                 </Grid>
            </Grid> 
             <Grid container justify='center' >
                 <Grid item xs={12} sm={12} lg={12}>
                     <img src={logo} alt='Logo' className={classes.logoContainer} />
                 </Grid>
            </Grid> 
         </>
    )
}

export default Login
