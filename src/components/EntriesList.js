import { AppBar, Box, Divider, FormControl, IconButton, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from '../api/axios';


const EntriesList = () => {
  const [entries, setEntries] = useState([])

  useEffect(()=>{
      axios.get('/users/1').then((response)=>{
          setEntries(response.data.entries)
      })
  },[])
 
  const handleClick =async(id)=>{
    await axios.delete(`/entries/${id}`)
    setEntries(
      entries.filter((entry)=>{
        return entry.id!==id
      })
    )
  }

  return (
    <div style={{border:'1px solid grey'}}>
      <AppBar color='transparent'  position='static'>
      <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="filter">Order By</InputLabel>
        <Select
          // labelId="filter"
          // value={ }
          label="Order By"
          // onChange={}
        >
          <MenuItem value={'Desc'}>Newest First</MenuItem>
          <MenuItem value={'Asc'}>Oldest First</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </AppBar>
      <List>
          {
            entries.map((entry)=>{
              return(
                <>
                <ListItem >
                  <ListItemText
                  primary={`${entry.title}`}
                  key={entry.id}
                  secondary={
                  <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {entry.body}
                  </Typography>
                </React.Fragment>
              }
            />
            <IconButton onClick={()=>handleClick(entry.id)}>
             <DeleteOutlineIcon/>
            </IconButton>
          </ListItem>
          <Divider/>
          </>
              )
            })
          }
      </List>
    </div>
  )
}

export default EntriesList