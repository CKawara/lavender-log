import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import axios from '../api/axios'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios.get('/categories').then((response)=>{
            setCategories(response.data)
        })
    },[])
    console.log(categories)
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