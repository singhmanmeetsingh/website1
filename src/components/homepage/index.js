import React from "react";
import { Grid } from '@material-ui/core';
import MainLogo from "./MainLogo";
import LeftSidetext from "./LeftSidetext";
const Homepage = () => {
    return (
      <>
        <Grid container style={{ marginTop: '3rem' }}>
          <Grid item xs={8}>
           <LeftSidetext/> 
          </Grid>
          <Grid item xs={4}>
            <MainLogo/>
          </Grid>
        </Grid>
      </>
    );   
}
export default Homepage;