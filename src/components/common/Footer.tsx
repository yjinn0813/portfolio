// footer

import React from 'react';
import '../../styles/components/Footer.scss';

import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type FooterProps = Record<string, never>;

const footerLinks = [
  {
    href: "https://github.com/yjinn0813",
    label: "visit github",
    Icon: GitHubIcon,
  },
  {
    href: "https://www.linkedin.com/in/yjinn0813",
    label: "visit linkedin",
    Icon: LinkedInIcon,
  },
  {
    href: "https://hjinn0813.tistory.com",
    label: "visit tech blog",
    Icon: BookmarkIcon,
  },
  {
    href: "mailto: hjc3790@gmail.com",
    label: "send email",
    Icon: EmailIcon,
  }
]

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
          {footerLinks.map(({ href, label, Icon }) => (
            <div className="footer-btn" key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon className="footer-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
