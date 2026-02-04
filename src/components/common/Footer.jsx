// footer

import React from 'react';
import '../../styles/Footer/Footer.scss';

import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="ft-content">
        <div className="ft-txt">
          © 2024 Hyejin Cho.
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
              href="https://github.com/hjinn0813"
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
