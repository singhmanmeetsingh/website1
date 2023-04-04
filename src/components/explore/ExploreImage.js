import React from 'react';
import {
  ImageContainer,
  InfoContainer,
  LeftSection,
  LeftSectionContainer,
  RightSection,
  LeftImage,
  RightImage,
  InfoGrid,
  InfoImageContainer,
  InfoDetailContainer,
} from "./styles";
import ArrowLeft from "../../assets/ArrowLeft.svg";
import ArrowRight from "../../assets/ArrowRight.svg";
import WireframeImg from "../../assets/Wireframe.svg";

const ExploreImage = () => {
  return (
      <ImageContainer container spacing={2}>
        <LeftSection item xs={6}>
          <InfoContainer>
            <InfoGrid
              container
              spacing={2}
              style={{ height: "100%", width: "100%" }}
            >
              <InfoImageContainer
                item
                xs={3}
              >
                <img src={WireframeImg}/>
              </InfoImageContainer>
              <InfoDetailContainer item xs={9}>
                {" "}
                Right Section
              </InfoDetailContainer>
            </InfoGrid>
          </InfoContainer>
          <LeftImage src={ArrowLeft} />
        </LeftSection>
        <RightSection item xs={6}>
          <RightImage src={ArrowRight} />
          <InfoContainer>
            <InfoGrid
              container
              spacing={2}
              style={{ height: "100%", width: "100%" }}
            >
              <InfoImageContainer
                item
                xs={3}
              >
                <img src={WireframeImg}/>
              </InfoImageContainer>
              <InfoDetailContainer item xs={9}>
                {" "}
                Right Section
              </InfoDetailContainer>
            </InfoGrid>
          </InfoContainer>
        </RightSection>
      </ImageContainer>
  )
}

export default ExploreImage ;
