// 기술뱃지 컴포넌트

import { BadgeItem } from '../../types/skills';

interface SkillAreaProps {
  title: string;
  badges: BadgeItem[];
  getBadge: (category: string, name: string) => string | null;
  className?: string;
}

export default function SkillArea({ 
    title, badges, getBadge, className 
  }: SkillAreaProps): JSX.Element {
  return (
    <div className={`sk-item ${className ?? ''}`}>
      <div className="sk-item-title">{title}</div>
      <div className="sk-item-value">
        {badges.map((badge, index) => (
          <img
            key={index}
            src={getBadge(badge.category, badge.path)}
            alt={badge.name}
            className="badge"
          />
        ))}
      </div>
    </div>
  )
}
