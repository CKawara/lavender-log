import { AppBar, Box, Divider, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from '../api/axios'


const EntriesList = () => {
  const [entries, setEntries] = useState([])
  useEffect(() => {
    axios.get('/users/1').then((response)=>{
      setEntries(response.data.entries)
  })
  },[])

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
        <ListItem>
          {
            entries.map((entry)=>{
              return(
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
              )
            })
          }
        </ListItem>
        <Divider/>
      </List>
    </div>
  )
}

export default EntriesList