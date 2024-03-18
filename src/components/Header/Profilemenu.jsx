import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PersonIcon from '@mui/icons-material/Person';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import PolylineIcon from '@mui/icons-material/Polyline';
import CallIcon from '@mui/icons-material/Call';
import ClearIcon from '@mui/icons-material/Clear';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Stack direction="row" spacing={1}>
            <Chip avatar={<Avatar><PersonIcon/></Avatar>} label="Profile" />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}> <PersonOutlineIcon className='mr-5'/>Account</MenuItem>
        <MenuItem onClick={handleClose}> <MessageIcon className='mr-5' />Inbox</MenuItem>
        <MenuItem onClick={handleClose}> <PolylineIcon className='mr-5' />Your Rides</MenuItem>
        <MenuItem onClick={handleClose}> <CallIcon className='mr-5'/>Help Center</MenuItem>
        <MenuItem onClick={handleClose}> <ClearIcon className='mr-5'/>Logout</MenuItem>
      </Menu>
    </div>
  );
}