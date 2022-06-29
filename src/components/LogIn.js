import { Button, Grid, Hidden, TextField, Typography } from '@mui/material'
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import React from 'react'
import { makeStyles } from '@mui/styles';
import Image from '../assets/loginImage.jpg'
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
  logo:{
    flexGrow:1,
    padding: '2%',
    cursor: 'pointer', 
    fontSize: 'xx-large'
  },
  login:{
    height:'100vh',
    // backgroundImage:`url(${Image}`,
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
    justifyContent:'center'

  },
  btn:{
    backgroundColor:'#7B6D8D',
    color: '#E5D9EB',
    padding: '2%'
  }
})
const LogIn = () => {
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
      <Grid item md={7} sm={12} style={{backgroundColor:'#E6E6FA', height:'100vh'}}>
        <Hidden mdUp>
          <Typography className={classes.logo} style={{fontFamily:'Bubblegum Sans',}}>
            LITTLE <br/> LAVENDER <br/> LOG <DriveFileRenameOutlineOutlinedIcon/>
          </Typography>
        </Hidden>
        <div className={classes.loginForm}>
          <Typography style={{marginBottom:15}}>Log in here:</Typography>
          <Box component='form' >
            <Grid container direction={"column"} spacing={3}>
              <Grid item>
                <TextField type='email' label="Email" variant="outlined" fullWidth/>
              </Grid>
              <Grid item>
                <TextField label="Last Name" variant="outlined" fullWidth/>
              </Grid>
              <Grid item>
                <button className={classes.btn}
                    // onClick={handleSubmit}
                >
                  Subscribe
                </button>  
              </Grid>
              <Grid item>
                <Typography>Don’t have an account? <Button 
                sx={{color:'black', fontWeight:'Bolder'}}
                >SignUp</Button></Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}

export default LogIn