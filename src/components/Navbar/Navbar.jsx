import React from 'react';
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom';
import useStyles from './style';
import logo from '../../assets/commerce.png';
const Navbar = ({totalItems})=>{
    const location =useLocation();
    const classes = useStyles();
    return(
             //empty react fragment
             <>
                <AppBar  position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                <Typography to='/' component={Link} variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> EStore 
                </Typography>
                    <div className={classes.grow} />

                 { location.pathname==='/' && // this is if condition if location pagth is '/' than true
                 (
                    <div className={classes.button} > 
                        <IconButton to='/cart' component={Link} aria-label='show cart items' color='inherit'>
                        <Badge badgeContent={totalItems}  color="secondary">
                            <ShoppingCart />
                        </Badge>
                        </IconButton>
                    </div>
                    )
                }
                </Toolbar>
                </AppBar>
            </>
      
    )
}

export default Navbar;