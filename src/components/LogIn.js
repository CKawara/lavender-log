import { Button, Grid, Hidden, TextField, Typography } from '@mui/material'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Image from '../assets/loginImage.jpg'
import Signup from './Signup';

const useStyles = makeStyles({
  logo:{
    flexGrow:1,
    padding: '2%',
    fontSize: 'large'
  },
  login:{
    height:'100vh',
    backgroundColor:'#E6E6FA'
  },
  loginForm:{
    border: '1px solid #E5D9EB',
    boxShadow:'0 3px 10px rgb(0 0 0 / 0.2)',
    height:'70%',
    padding: '5%',
    margin:'10%',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

  },
  btn:{
    backgroundColor:'#7B6D8D',
    color: '#E5D9EB',
    margin: '2%',
    padding: '2%',
    width: '30%',
    fontWeight: 'bolder'
  }
})
const LogIn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles()
  return ( 
    <Grid container>
      <Grid item sm={5}>
        <Hidden mdDown>
          <div className={classes.login} 
          style={{backgroundImage:`url(${Image}`, backgroundRepeat:'no-repeat',
          objectFit:'fit' }}>
            <Typography className={classes.logo} style={{fontFamily:'Bubblegum Sans',}}>
              LITTLE <br/> LAVENDER <br/> LOG <DriveFileRenameOutlineOutlinedIcon/>
            </Typography>
          </div>
        </Hidden>
      </Grid>
      <Grid item xs={12} md={7} style={{backgroundColor:'#E6E6FA', height:'100vh'}}>
        <Hidden mdUp>
          <Typography className={classes.logo} style={{fontFamily:'Bubblegum Sans',}}>
            LITTLE <br/> LAVENDER <br/> LOG <DriveFileRenameOutlineOutlinedIcon/>
          </Typography>
        </Hidden>
        <div className={classes.loginForm}>
          <Typography style={{marginBottom:15}}>Log in here:</Typography>
          <form className={classes.root}>
            <TextField margin='dense' label="Name" variant="outlined" required fullWidth  />
            <TextField margin='dense' label="Password" variant="outlined" type="password" required fullWidth />
            <button className={classes.btn}>Log In</button>
          </form>
          <Typography>Don’t have an account? 
            <Button 
            sx={{color:'black', fontWeight:'Bolder'}}
            onClick={handleOpen}
            >SignUp</Button>
          </Typography>
          <Signup open={open} handleClose={handleClose}/>
        </div>
      </Grid>
    </Grid>
  )
}

export default LogIn