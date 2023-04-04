import React, { Children } from "react";
import { AppBar, Toolbar, Grid, Container, Box, Button} from '@material-ui/core';
import HeaderLogo from "../../assets/logo.svg";
import { NavItem, NavButton, LayoutContainer } from "./styles";



const Layout = ({children}) => {
  
    return (
      <LayoutContainer>
        <AppBar
          position="static"
          elevation={0}
          style={{ backgroundColor: "#efedea", marginTop: "20px" }}
        >
          <Toolbar>
            <img src={HeaderLogo} alt="Logo" height={60} width={60} />
            <Box
              style={{
                color: "red",
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems:"center",
              }}
            >
              <NavItem>Portfolio</NavItem>
              <NavItem>Resume</NavItem>
              <NavItem>About</NavItem>
              <NavButton>Contact</NavButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Container maxWidth={false} sx={{ height: "100vh", width: "100vw" }}>
          {children}
        </Container>
      </LayoutContainer>
    );
}

export default Layout;