import React from "react";
import { Grid } from '@material-ui/core';
import MainLogo from "./MainLogo";
import LeftSidetext from "./LeftSidetext";
const Homepage = () => {
    return (
      <>
        <Grid container style={{ marginTop: '3rem' }}>
          <Grid item xs={7}>
           <LeftSidetext/> 
          </Grid>
          <Grid item xs={5}>
            <MainLogo/>
          </Grid>
        </Grid>
      </>
    );   
}
export default Homepage;