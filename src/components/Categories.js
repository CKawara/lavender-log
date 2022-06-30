import { Typography } from '@material-ui/core';
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
    <div>{list}</div>
  )
}

export default Categories