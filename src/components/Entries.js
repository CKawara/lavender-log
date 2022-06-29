import { Grid, Hidden } from '@mui/material'
import React from 'react'
import EntriesList from './EntriesList'
import EntryView from './EntryView'
import Sidebar from './Sidebar'

const Entries = () => {
  return (
    <div style={{backgroundColor: '#E6E6FA'}}>
        <Grid container>
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Hidden mdDown>
                <Grid item md={4}>
                    <EntriesList/>
                </Grid>
            </Hidden>
            <Grid item xs={10} md={6}>
                <EntryView/>
            </Grid>
            
        </Grid>
    </div>
  )
}

export default Entries