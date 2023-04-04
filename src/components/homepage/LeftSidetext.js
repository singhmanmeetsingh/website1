import { Grid } from '@material-ui/core';
import React from 'react';
import { ExploreButton, MainText, Nametext, SubText } from './style';
import { useNavigate } from "react-router-dom";


const LeftSidetext = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore")
  }
  return (
    <Grid>
      <Nametext>Hello, I’m Rajesh,</Nametext>
      <MainText>
        A balance of logic & creativity. My UX/UI design portfolio reveals an
        intricate dance of form & function, where usability & beauty meet in
        perfect harmony. I craft interfaces that delight & inspire, while still
        ensuring ease of use & accessibility.
      </MainText>
      <SubText>
        If you're ready to bring your digital vision to life, let's collaborate.<br/>
        Please contact me to discuss how I can bring value to your next<br/>
        project by applying my balanced approach.
      </SubText>
      <ExploreButton onClick={handleExploreClick}>Explore</ExploreButton>
    </Grid>
  );
}

export default LeftSidetext
