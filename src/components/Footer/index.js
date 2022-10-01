import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className='contact'>
            <a href="https://www.linkedin.com/in/eric-webber2/"><LinkedInIcon /></a>
            <a href="https://github.com/ewebber283"><GitHubIcon /></a>
            <a href="mailto:ewebber283@gmail.com"><EmailIcon /></a>
        </div>
        <p> &copy;2022 by Eric Webber</p>
    </div>
  );
};

export default Footer;