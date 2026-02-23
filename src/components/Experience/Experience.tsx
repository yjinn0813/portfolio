// 교육 및 경험 페이지

import { useState, useRef, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';
import ExperienceData from './Experience.json';
import NextBtn from '../common/NextBtn';
import { ExperienceDataItem } from '../../types/experience';
import '../../styles/Education/Education.scss';

export default function Education(): JSX.Element {
  const [activeId, setActiveId] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 시간 최신순 정렬
  const sortedExperience = [...ExperienceData as ExperienceDataItem[]].sort((a, b) => {
    const getStartDate = (period: string) => {
      // "2023.11 ~ 2023.12" → "2023.11"
      const start = period.split('~')[0].trim();
      // "2023.11" → 202311
      return Number(start.replace('.', ''));
    };

    return getStartDate(b.period) - getStartDate(a.period);
  });

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setActiveId(id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-40% 0px -50% 0px',
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <div className="edu-inner">
      <div className="edu-title">Experience</div>

      {/* experience cards */}
      <div className="edu-content">
        {sortedExperience.map((item, idx) => (
          <div className="timeline-item" 
            key={item.id}
            data-id={item.id}
            ref={(el) => (itemRefs.current[idx] = el)}
          >
            <div className={`timeline-dot ${activeId === item.id ? 'active' : '' }`} />
            <ExperienceCard data={item} />
          </div>
        ))}
      </div>
      <NextBtn to="/project" text="Check Projects 💻" />
    </div>
  );
}
