/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import CompanyName from "../assets/CompanyName.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InfoIcon from "@mui/icons-material/Info";
import { Phone, Home } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const menuOptions = [
    {
      text: "Home",
      icon: <Home />,
      href: "/",
    },
    {
      text: "Privacy Policy",
      icon: <InfoIcon />,
      href: "/privacy",
    },
    {
      text: "Contact Us",
      icon: <Phone />,
      href: "/contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img className="company-logo" src={CompanyName} alt="" />
        <img className="app-logo" src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        {location.pathname === "/privacy" || location.pathname === "/contact" ? (
          <a href="/">Home</a>
        ) : (
          <>
            <a href="/#work">How it Works</a>
            <a href="/#partners">Partners</a>
            <a href="/#download">Get App</a>
            <a href="/privacy">Privacy</a>
            <a href="/contact">Contact</a>
          </>
        )}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.href}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;