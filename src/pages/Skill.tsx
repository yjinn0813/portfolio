// tech stacks

import React, { useState } from 'react';
import NextBtn from '../components/common/NextBtn';
import Frontend from '../components/Skill/Frontend.json';
import Backend from '../components/Skill/Backend.json';
import Library from '../components/Skill/Library.json';
import Develop from '../components/Skill/Develop.json';
import Others from '../components/Skill/Others.json';
import SkillArea from '../components/Skill/SkillArea';
import { BadgeItem } from '../types/skills';
import FolderIcon from '@mui/icons-material/Folder';
import '../styles/Skill/Skill.scss';

const skillData = [
  { title: 'Frontend', data: Frontend },
  { title: 'Backend', data: Backend },
  { title: 'Framework & Library', data: Library },
  { title: 'Develop & Tooling', data: Develop },
  { title: 'Others', data: Others },
];

const Skill: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // 뱃지 이미지 불러오기
  const images = import.meta.glob('../../assets/badges/**/*.svg', { eager: true, import: 'default' });

  const getBadge= (category: string, imageName: string) => {
    const path = `../../assets/badges/${category}/${imageName}`;
    return (images as Record<string, string>)[path] || null;
  };

  return (
    <div className="skill-inner">
      <div className="skill-title">Tech Stack</div>

      <div className='skill-content'>
        {skillData.map((item, idx) => (
          <div key={idx} className='skill-folder-wrap'>
            {/* 폴더 헤더 */}
            <div
              className={`skill-folder ${activeIndex === idx ? 'active' : ''}`}
              onClick={() =>
                setActiveIndex(activeIndex === idx ? null : idx)
              }
            >
              <FolderIcon className='folder-icon' />
              <span className='folder-title'>{item.title}</span>
            </div>

            {/* 아코디언 */}
            <div className={`sk-item apple ${activeIndex === idx ? 'open' : ''}`}>
              {activeIndex === idx && (
                <SkillArea
                  title={item.title}
                  badges={item.data as BadgeItem[]}
                  getBadge={getBadge}
                />
              )}
            </div>
          </div>
        ))}

        {/* certificate */}
        <div className="skill-folder-wrap">
          <div
            className={`skill-folder ${activeIndex === 999 ? 'active' : ''}`}
            onClick={() =>
              setActiveIndex(activeIndex === 999 ? null : 999)
            }
          >
            <FolderIcon className='folder-icon' />
            <span className='folder-title'>Certificate</span>
          </div>

          <div
            className={`sk-item apple ${
              activeIndex === 999 ? 'open' : ''
            }`}
          >
            {activeIndex === 999 && (
              <>
                <div className="apple-header">
                  <div className="dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="apple-title">Certificate</div>
                </div>
                <div className="sk-item-value apple-body">
                  정보처리기사 필기 합격 (2024.05)
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <NextBtn to="/experience" text="Check Experience 🎓" />
    </div>
  );
}

export default Skill;