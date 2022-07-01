import { AppBar, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'

const useStyles = makeStyles({
  add:{
    backgroundColor:'#36151E',
    color: 'white',
  },
  entry:{
    height: '100vh',
    border: '1px solid grey'
  }
})
const EntryView = ({addNote}) => {
 
  const classes=useStyles()
  return (
    <div className={classes.entry}>
      <AppBar color='transparent'  position='static'>
        <Toolbar>
          <Typography style={{marginRight: 'auto'}}>Entry Date</Typography>
          <IconButton onClick={addNote}>
          <AddIcon className={classes.add} fontSize={'large'}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default EntryView