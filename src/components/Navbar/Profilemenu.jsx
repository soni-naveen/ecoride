import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import LogoutIcon from "@mui/icons-material/Logout";
import CallIcon from "@mui/icons-material/Call";
import PolylineIcon from "@mui/icons-material/Polyline";
import IconButton from "@mui/material/IconButton";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { cyan } from "@mui/material/colors";

// import { useRef, useState } from "react";
// import { AiOutlineCaretDown } from "react-icons/ai";
// import { VscDashboard, VscSignOut } from "react-icons/vsc";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { logout } from "../../../services/operations/authAPI";

export default function AccountMenu() {
  // const { user } = useSelector((state) => state.profile);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!user) return null;
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 1 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 40, height: 40, bgcolor: cyan[800] }}>N</Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} className="w-60">
          <PersonOutlineOutlinedIcon className="mr-8 text-dark-color" />
          Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="w-60">
          <ChatOutlinedIcon className="mr-8 text-dark-color" />
          Inbox
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="w-60">
          <PolylineIcon className="mr-8 text-dark-color" />
          Your Rides
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="w-60">
          <CallIcon className="mr-8 text-dark-color" />
          Help Center
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} className="w-60">
          <LogoutIcon className="mr-8 text-dark-color" />
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
