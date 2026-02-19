// contact

import '../../styles/Contact/Contact.scss';
import contactPhoto from '../../assets/contact.png';

const contactList = [
  {
    label: 'Email',
    href: 'mailto:hjc3790@gmail.com',
    text: 'hjc3790@gmail.com',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/hjinn0813',
    text: 'https://github.com/hjinn0813',
  },
  {
    label: 'Tech Blog',
    href: 'https://hjinn0813.tistory.com',
    text: 'https://hjinn0813.tistory.com',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/hjinn0813',
    text: 'https://codepen.io/hjinn0813',
  },
];

const Contact = (): JSX.Element => {
  return (
    <div className="contact-inner">
      <div className="contact-title">Contact</div>
      <div className="contact-content">
        <div className="contact-photo">
          <img src={contactPhoto} alt="contact" className="phone" />
        </div>
        <div className="contact-text">
          {contactList.map(item => (
            <div className="contact-item" key={item.label}>
              <p className="contact-key">{item.label}</p>
              <a
                href={item.href}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;