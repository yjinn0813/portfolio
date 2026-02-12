// tech stacks

import NextBtn from '../common/NextBtn';
import Frontend from './Frontend.json';
import Backend from './Backend.json';
import Library from './Library.json';
import Develop from './Develop.json';
import Others from './Others.json';
import SkillArea from './SkillArea';
import '../../styles/Skill/Skill.scss';

export default function Skill() {
  const getBadge = (category, name) => {
    try {
      return require(`../../assets/badges/${category}/${name}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null; // 이미지가 없을 경우 null 반환
    }
  };

  return (
    <div className="skill-inner">
      <div className="skill-title">Tech Stack</div>
      <div className="skill-content">
        <SkillArea
          title="Frontend"
          badges={Frontend}
          getBadge={getBadge}
        />

        <SkillArea
          title="Backend"
          badges={Backend}
          getBadge={getBadge}
        />

        <SkillArea
          title="Framework & Library"
          badges={Library}
          getBadge={getBadge}
        />

        <SkillArea
          title="Develop & Tooling"
          badges={Develop}
          getBadge={getBadge}
        />

        <SkillArea
          title="Others"
          badges={Others}
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
