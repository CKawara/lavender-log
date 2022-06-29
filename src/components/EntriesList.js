import { AppBar, Box, Divider, FormControl, InputLabel, List, ListItem, ListItemText, MenuItem, Select, Typography } from '@material-ui/core'
import React from 'react'


const EntriesList = () => {
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
          <ListItemText
            primary="Title"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Entry preview
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider/>
      </List>
    </div>
  )
}

export default EntriesList