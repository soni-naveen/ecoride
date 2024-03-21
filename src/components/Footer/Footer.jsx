import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TextField from '@mui/material/TextField';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className="bg-dark-color h-96 flex justify-around items-center text-white">


      <div className="left">
        <div className="heading">
          <h1>
            Follow Us
          </h1>
        </div>
        <div className="links">
          <InstagramIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>

      <div className="center flex flex-col items-center ">
        <div className="links flex flex-col gap-6 items-center mb-20">
          <h1>About Us</h1>
          <h1>Help Center</h1>
          <h1>How It Works</h1>
          <h1>Contact Us</h1>
          <h1>Join Community</h1>
        </div>

        <div className="copyright mt-6">
          <h1>Copyright <CopyrightIcon/> Reserved. Made With ❤️. All Right Reserved</h1>
        </div>
      </div>


      <div className="right">
        <h1>Stay Up To Date</h1>
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      
    </div>

    

  );
};

export default Footer;
