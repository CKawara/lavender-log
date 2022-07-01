import { List, ListItem, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
// import { UserContext } from '../context/Context';

const Categories = () => {
    // const {user} = useContext(UserContext);
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get('/categories').then((response)=>{
            setCategories(response.data)
        })
    },[])
    // console.log(user)
    const list = categories.map((one)=>{
        return(
            <Typography>{one.name}</Typography>
        )
    })
  return (
      <>
      <List>
          <ListItem>
          <Typography>Categories:</Typography>
          </ListItem>
          <ListItem>
              <Typography>{list}</Typography>
          </ListItem>
      </List>
      </>
  )
}

export default Categories