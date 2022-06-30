import { Button, Divider, Drawer, Hidden, IconButton, List, ListItem, SwipeableDrawer, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React, { useState } from 'react'
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import EntriesList from "./EntriesList";
import Categories from "./Categories";


const useStyles = makeStyles((theme)=>({
    sidebar:{
        width: '25%',
        height: '100vh',
        background: 'linear-gradient(to bottom, #36151E, #7B6D8D, #A5C4D4)',
        [theme.breakpoints.down('md')]:{
            width: '50%'
        },[theme.breakpoints.down('xs')]:{
            width: '100%'
        }
    }

}))


const Sidebar = () => {
    const [open, setOpen]=useState(false)
    const [state, setState] = React.useState({
        right: false,
      });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
     

    const classes = useStyles()
  return (
        <div className={classes.sidebar}>
            <IconButton onClick={()=> setOpen(true)}>
                <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
            <SwipeableDrawer open={open} 
            anchor={'left'} 
            onOpen={()=> setOpen(true)}
            onClose={()=> setOpen(false)}
            >
                <IconButton onClick={()=> setOpen(false)}>
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <Hidden mdUp>
                    <div>
                    {['left'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>My Logs</Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                <EntriesList/>
                            </Drawer>
                        </React.Fragment>
                    ))}
                    </div>
                </Hidden>
                <Divider/>
                <List >
                    <ListItem>
                        <Categories/>
                    </ListItem>
                </List>
                <Calendar/>
            </SwipeableDrawer>
        </div>
  )
}

export default Sidebar