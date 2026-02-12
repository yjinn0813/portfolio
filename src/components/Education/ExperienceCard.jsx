// 경험 내역 카드 컴포넌트

import React, { useState } from 'react'

export default function ExperienceCard({ data }) {
  const { period, title, type, description, links, projects } = data;

  // 프로젝트 인덱스 관리
  const [openIdx, setOpenIdx] = useState(null) 

  // 토글 핸들러
  const handleToggle = (idx) => {
    setOpenIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <div className='edu-item'>
      <div className="edu-time">{period}</div>
      <div className='attribute'>
        {title.split('\n').map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>

      {/* study / education */}
      {description && (
        <ul className="edu-info">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}

      {/* work 전용: 프로젝트 토글 */}
      {type === 'work' && projects && (
        <ul className="edu-info exp-pj">
          {projects.map((project, idx) => (
            <li key={project.id}>
              <p
                className={`project-title ${openIdx === idx ? 'open' : ''}`}
                onClick={() => handleToggle(idx)}
              >
                {project.period}, {project.name}
              </p>

              {openIdx === idx && (
                <ul className="sub-list">
                  <li>
                    <span>기술스택:</span> {project.stack.join(', ')}
                  </li>
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* 링크 */}
      {links && (
        <div className="edu-link">
          {links.map((link, idx) => (
            <button className="opensite">
              <a
                key={idx}
                href={link.url}
                aria-label="github"
                alt="github"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                {link.label}
              </a>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
