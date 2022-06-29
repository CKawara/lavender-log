import { Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import Image from '../assets/loginImage.jpg'

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
  }
})
const LogIn = () => {
  const classes = useStyles()
  return ( 
    <Grid container spacing={2}>
      <Grid item sm={5}>
        <div className={classes.login} 
        style={{backgroundImage:`url(${Image}`, 
        objectFit:'contain' }}>
          {/* <Typography className={classes.logo} style={{fontFamily:'Bubblegum Sans',}}>
            LITTLE <br/> LAVENDER <br/> LOG <DriveFileRenameOutlineIcon/>
          </Typography> */}

        </div>
      </Grid>
      <Grid item sm={7}>
      <form >
      <TextField
          
          variant='outlined'
          type='email'
          label='Enter email'
          // value={email}
          // onChange={(e)=>setEmail(e.target.value)}
          fullWidth
      />
      <TextField
          variant='outlined'
          type='name'
          // label='Enter name'
          // value={name}
          // onChange={(e)=>setName(e.target.value)}
          fullWidth
      />
      <button className={classes.btn}
          // onClick={handleSubmit}
      >
        Subscribe
      </button>
      </form>
      </Grid>
    </Grid>
  )
}

export default LogIn