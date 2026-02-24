// project preview

import React from 'react';
import { ProjectItem } from '../../types/projects';

interface ProjectPreviewProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({ project, onClick }) => {
  const images = import.meta.glob('../../assets/projects/**/*.png', { eager: true, import: 'default' });

  const getImage = (type: string, imageName: string) => {
    const path = `../../assets/projects/${type}/${imageName}`;
    return (images as Record<string, string>)[path] || null;
  };

  return (
    <div
      className="pj-preview"
      onClick={() => onClick(project)}
      role="button"
    >
      {/* 배경 이미지 */}
      <div
        className="pj-preview-bg"
        style={{
          backgroundImage: `url(${getImage(project.type, project.image?.[0])})`,
        }}
      />

      {/* 어두운 오버레이 */}
      <div className="pj-preview-overlay" />

      {/* 텍스트 영역 */}
      <div className="pj-preview-content">
        <span className={`pj-badge ${project.type}`}>
          {project.type.toUpperCase()}
        </span>
        <p className="pj-preview-title">{project.title}</p>
        <p className='pj-preview-subtitle'>{project.subtitle}</p>
      </div>
    </div>
  );
}

export default ProjectPreview;