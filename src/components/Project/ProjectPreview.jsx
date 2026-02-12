import React from 'react'

export default function ProjectPreview({ project, onClick }) {
  const getImage = (imageName) => {
    try {
      return require(`../../assets/projects/${imageName}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null;
    }
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
          backgroundImage: `url(${getImage(project.image?.[0])})`,
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
      </div>
    </div>
  );
}
