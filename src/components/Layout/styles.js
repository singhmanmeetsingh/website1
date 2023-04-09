import { Typography, styled, Button, Grid } from "@material-ui/core";

export const LayoutContainer = styled(Grid)({
    height:"100vh"
})

export const NavItem = styled(Typography)({
  margin : '0 32px',
  cursor: "pointer",
  fontSize: "19px",
  fontWeight: "400",
  lineHeight: "19px",
  color: "#292524",
})
export const NavButton = styled(Button)({
  border: "2px solid black",
  borderRadius: "4px",
  fontSize: "19px",
  fontWeight: "400",
  lineHeight: "19px",
  textTransform: 'none',
  margin:"0 32px"
});