// tech stacks

import NextBtn from '../common/NextBtn';
import Frontend from './Frontend.json';
import Backend from './Backend.json';
import Library from './Library.json';
import Develop from './Develop.json';
import Others from './Others.json';
import SkillArea from './SkillArea';
import { BadgeItem } from '../../types/skills';
import '../../styles/Skill/Skill.scss';


export default function Skill(): JSX.Element {
  const getBadge = (category: string, name: string): string | null => {
    try {
      return require(`../../assets/badges/${category}/${name}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null;
    }
  };

  return (
    <div className="skill-inner">
      <div className="skill-title">Tech Stack</div>
      <div className="skill-content">
        <SkillArea
          title="Frontend"
          badges={Frontend as BadgeItem[]}
          getBadge={getBadge}
        />

        <SkillArea
          title="Backend"
          badges={Backend as BadgeItem[]}
          getBadge={getBadge}
        />

        <SkillArea
          title="Framework & Library"
          badges={Library as BadgeItem[]}
          getBadge={getBadge}
        />

        <SkillArea
          title="Develop & Tooling"
          badges={Develop as BadgeItem[]}
          getBadge={getBadge}
        />

        <SkillArea
          title="Others"
          badges={Others as BadgeItem[]}
          getBadge={getBadge}
        />

        <div className="sk-item">
          <div className="sk-item-title">Certificate</div>
          <div className="sk-item-value">정보처리기사 필기 합격(2024.05)</div>
        </div>
      </div>
      <NextBtn to="/experience" text="Check Experience 🎓" />
    </div>
  );
}
