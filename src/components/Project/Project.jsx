// 전체 프로젝트 확인 영역

import React from 'react';
import Projects from './Projects.json';
import NextBtn from '../common/NextBtn';
import ProjectCard from './ProjectCard';
import '../../styles/Project/Project.scss';

export default function Project() {
  return (
    <div className="pj-container">
      <div className="pj-title">Projects</div>
      {Projects.map((project) => (
        <ProjectCard key={project.id} project={project} className="pj-card" />
      ))}
      <NextBtn to="/contact" text="Contact Me!📧" />
    </div>
  );
}
