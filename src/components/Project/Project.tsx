/* 프로젝트 페이지 */

import React, { useState } from 'react';
import Projects from './Projects.json';
import NextBtn from '../common/NextBtn';
import ProjectCard from './ProjectCard';
import ProjectPreview from './ProjectPreview';
import { ProjectItem } from '../../types/projects';
import '../../styles/Project/Project.scss';

const Project: React.FC = () => {
  // 모달 오픈
  const [isClicked, setIsClicked] = useState<ProjectItem | null>(null)

  const handleOpen = (project: ProjectItem) => {
    setIsClicked(project)
  }

  const handleClose = () => {
    setIsClicked(null)
  }

  // 우선순위 정렬
  const tierOrder: Record<string, number> = {
    primary: 0,
    secondary: 1
  }
  const typeOrder: Record<string, number> = {
    work: 0,
    team: 1,
    personal: 2
  }

  const sortedProjects = [...(Projects as ProjectItem[])].sort((a, b) => {
    // tier 비교
    if (tierOrder[a.tier] !== tierOrder[b.tier]) {
      return tierOrder[a.tier] - tierOrder[b.tier];
    }

    // type 비교
    return typeOrder[a.type] - typeOrder[b.type];
  });


  return (
    <div className="pj-container">
      <div className="pj-title">Projects</div>

      {/* preview */}
      <div className="pj-preview-grid">
        {sortedProjects.map((project) => (
          <ProjectPreview
            key={project.id}
            project={project}
            onClick={handleOpen}
          />
        ))}
      </div>

      {/* modal */}
      {isClicked && (
        <div className="pj-modal-overlay" onClick={handleClose}>
          <div
            className="pj-modal terminal"
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectCard 
              project={isClicked}
              onClose={handleClose}
            />
          </div>
        </div>
      )}

      <NextBtn to="/contact" text="Contact Me! 📧" />
    </div>
  );
}

export default Project;