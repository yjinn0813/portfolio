/* 프로젝트 카드 컴포넌트 */
import React from 'react';

// swiper slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectCard({ project }) {
  const getImage = (imageName) => {
    try {
      return require(`../../assets/projects/${imageName}`);
    } catch (error) {
      console.error('Image not found:', error);
      return null;
    }
  };

  const toBrTag = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="pj-card">
      {project.image && (
        <Swiper
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
          style={{ width:'100%', maxWidth:'900px' }}
        >
          {project.image.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="img-wrap">
                <img
                  src={getImage(img)}
                  alt={`${project.title} - ${index + 1}`}
                  className="pj-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="pj-info">
        <p className="pj-item-title">{project.title}</p>
        <div className="pj-descript">{project.descript}</div>

        <div className="pj-date">
          <span className="pj-info-title">기간</span>
          <span className="pj-info-value">{toBrTag(project.peroid)}</span>
        </div>

        <div className="pj-team">
          <span className="pj-info-title">인원</span>
          <span className="pj-info-value">{project.team}</span>
        </div>

        <div className="pj-skills">
          <div className="pj-info-title">사용 기술</div>
          <div className="pj-info-value">{project.skills}</div>
        </div>

        <div className="pj-response">
          <div className="pj-info-title">담당 파트/주요 기능</div>
          <div className="pj-info-value">{toBrTag(project.response)}</div>
        </div>

        {/* 링크 없을 때 대비 */}
        {project.links && project.links.length > 0 && (
          <div className="pj-link">
            {project.links[0].website && (
              <button
                className="openlink"
                onClick={() =>
                  window.open(project.links[0].website, '_blank')
                }
              >
                Website
              </button>
            )}
            {project.links[0].README && (
              <button
                className="openlink"
                onClick={() =>
                  window.open(project.links[0].README, '_blank')
                }
              >
                README
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
