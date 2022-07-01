import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import { Dialog, DialogTitle, TextField } from '@material-ui/core'
import React, { useState }  from 'react'
import axios from '../api/axios'

const useStyles = makeStyles({
  add:{
    backgroundColor:'#36151E',
    color: 'white',
  },
  entry:{
    height: '100vh',
    border: '1px solid grey'
  },
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
})
const EntryView = ({addNote}) => {
  const [open, setOpen] = useState(false);
  const [entryObject, setEntryObject] =useState({
    title: "",
    body: "",
    user_id: 1,
    category_id: 3
  })

  const handleChange = (e) => {
    setEntryObject({
        ...entryObject,
        [e.target.id]: e.target.value
    })
  }
  const handleSubmit =async(e)=>{
    e.preventDefault()
    const response = await axios.post('/entries',
      JSON.stringify(entryObject),
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    console.log(JSON.stringify(response?.data))
    setEntryObject({
      title: "",
      body: "",
      user_id: '',
      category_id: ''
    })
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  const classes=useStyles()
  return (
    <div className={classes.entry}>
      <AppBar color='transparent'  position='static'>
        <Toolbar>
          <Typography style={{marginRight: 'auto'}}>Entry Date</Typography>
          <IconButton onClick={handleOpen}>
          <AddIcon className={classes.add} fontSize={'large'}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle>Add Entry Here:</DialogTitle>
        <form onSubmit={handleSubmit} className={classes.root}>
          <TextField onChange={handleChange} margin='dense' label="Title" id="title" variant="outlined" type='text' value={entryObject.title} required fullWidth  />
          <TextField onChange={handleChange} margin='dense' label="Body" id='body' variant="outlined" type="text" value={entryObject.body} required fullWidth />
          <button type='submit' className={classes.btn}>Log Entry</button>
        </form>
    </Dialog>
    </div>
  )
}

export default EntryView