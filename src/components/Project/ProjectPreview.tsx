import { ProjectItem } from '../../types/projects';

interface ProjectPreviewProps {
  project: ProjectItem;
  onClick: (project: ProjectItem) => void;
}

export default function ProjectPreview({ project, onClick }: ProjectPreviewProps): JSX.Element {
  const getImage = (type: string, imageName?: string) => {
    try {
      return require(`../../assets/projects/${type}/${imageName}`);
    } catch (error) {
      console.error('Image not found:', type, imageName);
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
