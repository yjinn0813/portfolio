// contact

import React from 'react';
import ContactCard from '../components/Contact/ContactCard';
import github from '../assets/contact/github.png';
import tistory from '../assets/contact/tistory-dark.png';
import codepen from '../assets/contact/codepen.png';
import gmail from '../assets/contact/gmail.png';
import '../styles/pages/Contact.scss';

const contactList = [
  {
    label: 'GitHub',
    href: 'https://github.com/yjinn0813',
    text: 'https://github.com/yjinn0813',
    img: github,
  },
  {
    label: 'Tech Blog',
    href: 'https://hjinn0813.tistory.com',
    text: 'https://hjinn0813.tistory.com',
    img: tistory,
  },
  {
    label: 'Email',
    href: 'mailto:hjc3790@gmail.com',
    text: 'mail to hjc3790@gmail.com',
    img: gmail,
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/yjinn0813',
    text: 'https://codepen.io/yjinn0813',
    img: codepen,
  }
];

const Contact: React.FC = () => {
  return (
    <div className="contact-inner">
      <div className="contact-title">Contact</div>
      <div className="contact-text">
        {contactList.map(item => (
          <ContactCard key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Contact;