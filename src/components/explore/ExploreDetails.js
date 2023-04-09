import React from 'react';
import { Grid } from '@material-ui/core';
import { ExploreDetailsContainer, ExploreDetailsTitle, ExploreDetailSubtitle, ExploreProjectContainer, ExploreSubTitleImage } from './styles';
import CursorImg from "../../assets/cursor.svg";
import { ProjectList } from './utils';

const ExploreDetails = ({
  setProject,
  project
}) => {
  return (
    <ExploreDetailsContainer container>
      <Grid container spacing={4}>
        <ExploreDetailsTitle item xs={6} justifyContent="flex-end">
          UI
        </ExploreDetailsTitle>
        <ExploreDetailsTitle item xs={6} justifyContent="flex-start">
          UX
        </ExploreDetailsTitle>
      </Grid>
      <Grid>
        <ExploreDetailSubtitle>
          Click
          <ExploreSubTitleImage src={CursorImg} />
          below to check some of my latest work / Case Studies
        </ExploreDetailSubtitle>
      </Grid>
      <Grid container spacing={4} alignItems="center" justify="center">
        {ProjectList?.map((pr) => (
          <ExploreProjectContainer item onClick={() => setProject(pr)}>
            <img src={project.name === pr.name? pr.imageSelected : pr.image} />
          </ExploreProjectContainer>
        ))}
      </Grid>
    </ExploreDetailsContainer>
  );
}

export default ExploreDetails
