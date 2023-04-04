import { Grid , styled } from '@material-ui/core';
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