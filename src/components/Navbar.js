import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import fav from "./favicon.png";

export default function Navbar() {
  const navigate = useNavigate();
  //   const [auth, setAuth] = useState(false);
  const auth = localStorage.getItem("auth");
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = localStorage.getItem("auth");
  const username = localStorage.getItem("Username") || " ";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const loginHandler = () => {
    navigate("/");
  };

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("Username");
    localStorage.removeItem("password");
    localStorage.removeItem("Email");
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "red" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={fav} style={{width:"50px",height:"40px"}}></img>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            
          </Typography>
          {isLoggedIn && (
          <Typography variant="h6" >
              Welcome {username}
            </Typography>
          )}
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
              >
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Typography variant="h6" onClick={loginHandler}>
              Login
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
