import { Typography, Button, Grid, styled } from "@material-ui/core";

export const ImageContainer = styled(Grid)({
    position:"relative",
    width:"100%",
    display:"flex",
    justifyContent:"flex-end"
})

export const Nametext = styled(Typography)({
  fontFamily: "IBM Plex Sans",
  fontSize: "22px",
  fontWeight: 500,
  lineHeight: "30px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#292524",
});


export const MainText = styled(Typography)({
  fontFamily: "Sora",
  fontSize: "34px",
  fontWeight: "700",
  lineHeight: "43px",
  textAlign: "left",
  marginTop:"24px"
});

export const SubText = styled(Typography)({
  fontFamily: "IBM Plex Sans",
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: "0em",
  textAlign: "left",
  marginTop:"24px",
  color:"#292524"
});

export const ExploreButton = styled(Button)({
  border: "2px solid black",
  borderRadius: "4px",
  fontSize: "19px",
  fontWeight: "400",
  lineHeight: "19px",
  textTransform: 'none',
  marginTop:"38px"
});