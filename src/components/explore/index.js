import React, {useState} from 'react';
import { Grid } from '@material-ui/core';
import ExploreImage from './ExploreImage';
import ExploreDetails from './ExploreDetails';



const Explore = () => {
  const [selectedProject, setSelectedProject] = useState("");
  console.log("selectedProject", selectedProject)
  return (
    <Grid>
      <ExploreImage/>
      <ExploreDetails setProject={setSelectedProject} project={selectedProject}/>
    </Grid>
  );
}

export default Explore
