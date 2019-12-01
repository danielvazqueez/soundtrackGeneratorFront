import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Link from "../components/Link";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);

  const logout = () => {
    
  }
  return (
    <>
      <IconButton
        aria-owns={isOpen ? "profile-menu" : undefined}
        aria-haspopup="true"
        onClick={(event) => {
          setIsOpen(true);
          setAnchor(event.currentTarget);
        }}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="profile-menu"
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Link to="/">
          <MenuItem onClick={() => logout()}>Cerrar Sesión.</MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default withAuth(ProfileMenu);
