// footer

import React from 'react';
import '../../styles/common/Footer.scss';

import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GitHubIcon from '@mui/icons-material/GitHub';

type FooterProps = Record<string, never>;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="ft-content">
        <div className="ft-txt">
          © 2024 Yujin Cho.
          <br />
          All rights reserved.
        </div>
        <div className="ft-icons">
          <div className="footer-btn">
            <a
              href="mailto: hjc3790@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="send email"
            >
              <EmailIcon className="footer-icon" />
            </a>
          </div>
          <div className="footer-btn">
            <a
              href="https://hjinn0813.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="visit tech blog"
            >
              <BookmarkIcon className="footer-icon" />
            </a>
          </div>
          <div className="footer-btn">
            <a
              href="https://github.com/yjinn0813"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="visit GitHub"
            >
              <GitHubIcon className="footer-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
