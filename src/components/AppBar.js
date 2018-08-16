import React from 'react'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import * as actions from '../actions/usuario'
import {connect} from 'react-redux';

import { Link } from 'react-router-dom'


const CustomAppBar = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar style={{
                backgroundColor: 'white',
                top: 0,
            }} position="static">
                <Toolbar style={{ color: 'white', opacity: 1 }}>
                    <Typography variant="title" style={{ color: '#1B5E20', opacity: 1 }} className={classes.flex}>
                        Casa de Gramado
                    </Typography>

                    <Link style={{ textDecoration: 'none' }} to="/">
                        <Button style={{ color: '#1B5E20' }}>Home</Button>
                    </Link>

                    <Link style={{ textDecoration: 'none' }} to="reservas">
                        <Button style={{ color: '#1B5E20' }}>Reservas</Button>
                    </Link>
                    
                    <Button style={{ color: '#1B5E20' }}>Instruções</Button>
                    <Button style={{ color: '#1B5E20' }} onClick={props.logout} to="/">Sair</Button>
                </Toolbar>
            </AppBar>
        </div>
    )

}


const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}


export default withStyles(styles)(connect(null, mapDispatchToProps)(CustomAppBar));
