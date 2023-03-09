import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [value,setValue] = useState();
  return (
    <div>
              <div style={{height:"40px",width:"auto",marginLeft:"35rem",
              fontSize:"25px" ,textShadow:"1px 1px 2px black"     }}>BOOK STORE</div>
        <AppBar sx={{backgroundColor:"black"}} position='sticky'>
            <Toolbar>
<Typography>
                <LibraryBooksOutlinedIcon/>
                </Typography>
               <Tabs style={{backgroundColor:"black",color:"white",fontFamily:"sans-serif"}}
               sx={{ml:"auto"}}
              //  color="inherit"
              //   indicatorColor='secondary'
                 value={value}
                  onChange={(e,val) => setValue(val)}>
<Tab style={{backgroundColor:"black",color:"white",fontFamily:"sans-serif"}} LinkComponent={NavLink} to ='/add' label="Add Product" />
<Tab style={{backgroundColor:"black",color:"white",fontFamily:"sans-serif"}} LinkComponent={NavLink} to ='/books' label="Books" />
<Tab style={{backgroundColor:"black",color:"white",fontFamily:"sans-serif"}} LinkComponent={NavLink} to ='/aboutus' label="AboutUs" />
               </Tabs>
            </Toolbar>
           
            </AppBar>

    </div>
  )
}

export default Header