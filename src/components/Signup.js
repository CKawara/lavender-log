import { Dialog, DialogTitle, TextField } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2%'
  },
  btn:{
    backgroundColor:'#7B6D8D',
    color: '#E5D9EB',
    padding: '2%',
    width: '30%',
    fontWeight: 'bolder'
  }
}));
const Signup = ({ open, handleClose }) => {
  const classes = useStyles()

  return (
    <Dialog fullWidth open={open} onClose={handleClose} 
    overlayStyle={{backgroundColor: '#E5D9EB'}}
      >
        <DialogTitle>Sign Up Here:</DialogTitle>
        <form className={classes.root}>
          <TextField margin='dense' label="Name" variant="outlined" required fullWidth  />
          <TextField margin='dense' label="Email" variant="outlined" type="email" required fullWidth />
          <TextField margin='dense' label="Password" variant="outlined" type="password" required fullWidth />
          <button className={classes.btn}>Sign Up</button>
        </form>
    </Dialog>
  )
}

export default Signup