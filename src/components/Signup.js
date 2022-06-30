import { Dialog, DialogTitle, TextField } from '@material-ui/core'
import { makeStyles } from '@mui/styles';
import React, {useState } from 'react'
import axios from '../api/axios'


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
  // const {setUser} = useContext(UserContext)
  const [userObject, setUserObject] =useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUserObject({
        ...userObject,
        [e.target.id]: e.target.value
    })
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const response = await axios.post('/users',
      JSON.stringify(userObject),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    console.log(JSON.stringify(response?.data))
    setUserObject({
      name: "",
      email: "",
      password: ""
    })
  }

  const classes = useStyles()

  return (
    <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Sign Up Here:</DialogTitle>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField onChange={handleChange} margin='dense' label="Name" id="name" variant="outlined" type='text' value={userObject.name} required fullWidth  />
          <TextField onChange={handleChange} margin='dense' label="Email" id='email' variant="outlined" type="email" value={userObject.email} required fullWidth />
          <TextField onChange={handleChange} margin='dense' label="Password" id='password' variant="outlined" type="password" value={userObject.password} required fullWidth />
          <button type='submit' className={classes.btn}>Sign Up</button>
        </form>
    </Dialog>
  )
}

export default Signup