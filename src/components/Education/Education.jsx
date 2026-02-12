// 교육 및 경험 페이지

import React from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceData from './Experience.json';
import NextBtn from '../common/NextBtn';
import '../../styles/Education/Education.scss';

export default function Education() {
  // 시간 최신순 정렬
  const sortedExperience = [...ExperienceData].sort((a, b) => {
    const getStartDate = (period) => {
      // "2023.11 ~ 2023.12" → "2023.11"
      const start = period.split('~')[0].trim();
      // "2023.11" → 202311
      return Number(start.replace('.', ''));
    };

    return getStartDate(b.period) - getStartDate(a.period);
  });

  return (
    <div className="edu-inner">
      <div className="edu-title">Experience</div>
      <div className="edu-content">
        {sortedExperience.map((item) => (
          <ExperienceCard key={item.id} data={item} />
        ))}
      </div>
      <NextBtn to="/project" text="Check Projects 💻" />
    </div>
  );
}
