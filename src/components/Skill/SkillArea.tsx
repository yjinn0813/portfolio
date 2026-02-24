// 기술뱃지 카드 컴포넌트

import React from 'react';
import { BadgeItem } from '../../types/skills';

interface SkillAreaProps {
  title: string;
  badges: BadgeItem[];
  getBadge: (category: string, name: string) => string | null;
}

const SkillArea: React.FC<SkillAreaProps> = ({ title, badges, getBadge }) => {
  return (
    <>
      <div className="apple-header">
        <div className="dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="apple-title">{title}</div>
      </div>
      <div className="sk-item-value apple-body">
        {badges.map((badge, index) => (
          <img
            key={index}
            src={getBadge(badge.category, badge.path)}
            alt={badge.name}
            className="badge"
          />
        ))}
      </div>
    </>
  )
}

export default SkillArea;