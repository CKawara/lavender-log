import { Grid, Hidden } from '@mui/material'
import EntriesList from './EntriesList'
import React, { useEffect, useState } from 'react'
import EntryView from './EntryView'
import Sidebar from './Sidebar'
import axios from '../api/axios';

const Entries = () => {
    const [entries, setEntries] = useState([])

    useEffect(()=>{
        axios.get('/users/1').then((response)=>{
            setEntries(response.data.entries)
        })
    },[entries])
   
  return (
    <div style={{backgroundColor: '#E6E6FA'}}>
        <Grid container>
            <Grid item xs={2}>
                <Sidebar/>
            </Grid>
            <Hidden mdDown>
                <Grid item md={4}>
                    <EntriesList entries={entries} setEntries={setEntries} />
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