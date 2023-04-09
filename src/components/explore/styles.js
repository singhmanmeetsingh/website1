import { Grid , styled, Typography } from '@material-ui/core';
import Logo from "../../assets/combine.svg";

export const ImageContainer = styled(Grid)({
  backgroundImage: `url(${Logo})`,
  height: "400px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

export const LeftSection = styled(Grid)({
    marginTop:"30px",
    display:"flex",
    justifyContent:"start",
    alignItems:"top",
    position:"relative"
})

export const RightSection = styled(Grid)({
    marginBottom:"30px",
    display:"flex",
    justifyContent:"end",
    alignItems:"end",
})
export const InfoContainer = styled(Grid)({
    height:"110px",
    border:"2px solid #4F4D4D",
    borderRadius:"14px",
    width:"365px"
})


export const LeftSectionContainer = styled(Grid)({
    position:"absolute",
    display:"flex",
    alignItems:"center",
    top:'20%'
})

export const LeftImage = styled(`img`)({
    width:"100px",
    height:"200px"
}) 

export const RightImage = styled(`img`)({
    width:"100px",
    height:"200px"
})


export const InfoImage = styled(`img`)({
    width:"40px",
    height:"40px"
})


export const InfoGrid = styled(Grid)({
    display:"flex",
    width:"100%",
    height:"100%"
})

export const InfoImageContainer = styled(Grid)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
})

export const InfoDetailContainer = styled(Grid)({
    display:"flex"
})

export const ExploreDetailsContainer = styled(Grid)({
    alignItems:"center",
    width:"100%",
    flexDirection:"column"
})
export const ExploreDetailsTitle = styled(Grid)({
  fontFamily: "Space Grotesk",
  fontSize: "61px",
  fontWeight: 700,
  lineHeight: "73px",
  letterSpacing: "0em",
  textAlign: "center",
  display:"flex"
});

export const ExploreDetailSubtitle = styled(Typography)({
  fontFamily: "IBM Plex Sans",
  fontSize: "19px",
  fontWeight: 400,
  lineHeight: "30px",
  letterSpacing: "0em",
  color: "#57534E",
  display:"flex",
  alignItems:"center",
  margin:"20px 0",

});

export const ExploreSubTitleImage = styled(`img`)({
    width:"20px",
    height:"20px",
    marginRight:"8px"
})

export const ExploreProjectContainer = styled(Grid)({
    cursor:"pointer"
})