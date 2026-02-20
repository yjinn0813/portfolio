// 연락 페이지 카드 컴포넌트

interface ContactCardProps {
  label: string;
  href: string;
  text: string;
  img?: string;
}

const ContactCard = ({ label, href, text, img }: ContactCardProps) => {
  return (
    <div className="mac">
      <div className="mac-header">
        <div className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="mac-title">{label}</div>
      </div>

      <div className="mac-body">
        <div className='link'>
          <p>{text}</p>
        </div>
        <a
          href={href}
          className="contact-link"
          target="_blank"
          rel="noopener noreferrer"
          >
          {img && <img src={img} alt={`${label} preview`} />}
        </a>
      </div>
    </div>
  );
}

export default ContactCard;