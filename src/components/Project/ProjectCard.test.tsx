/* project card modal vitest code */
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import type { ProjectItem } from '../../types/projects';
import ProjectCard from './ProjectCard';

const mockData: ProjectItem = {
  id: 1,
  title: 'Portfolio Site',
  subtitle: 'Personal Portfolio',
  descript: 'React 기반 포트폴리오 사이트입니다.',
  peroid: '2026.02 ~ 2026.03',
  team: '1인',
  type: 'personal',
  tier: 'primary',
  image: ['portfolio-main.png'],
  skills: ['React', 'TypeScript', 'SASS', 'Vite', 'Vitest', ],

  response: [
    '컴포넌트 기반 구조 설계',
    'Vitest 테스트 환경 구축',
    '프로젝트 모달 인터랙션 구현',
  ],

  links: [
    {
      website: 'https://example.com',
      README: 'https://github.com/example/readme',
    },
  ],
};

describe('ProjectCard', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  // 데이터 렌더링
  test('render project info', () => {
    render(
      <MemoryRouter>
        <ProjectCard
          project={mockData}
          onClose={vi.fn()}
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/2026.02 ~ 2026.03/i)).toBeInTheDocument();
    expect(screen.getByText(/1인/i)).toBeInTheDocument();

    // 이미지 렌더링 확인
    const image = screen.getByAltText(/Portfolio Site - 1/i);
    expect(image).toBeInTheDocument();
  });

  // 
  test('call onClose when close btn clicked', () => {
    const onClose = vi.fn();

    render(
      <MemoryRouter>
        <ProjectCard
          project={mockData}
          onClose={onClose}
        />
      </MemoryRouter>
    );

    const closeBtn = screen.getByRole('button', {
      name: /close modal/i,
    });

    fireEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalled();
  });

  //
  test('open website link', () => {
    render(
      <MemoryRouter>
        <ProjectCard
          project={mockData}
          onClose={vi.fn()}
        />
      </MemoryRouter>
    );

    const websiteBtn = screen.getByText(/website/i);
    fireEvent.click(websiteBtn);

    expect(window.open).toHaveBeenCalledWith(
      'https://example.com',
      '_blank'
    );
  });

  //
  test('open readme link', () => {
    render(
      <MemoryRouter>
        <ProjectCard
          project={mockData}
          onClose={vi.fn()}
        />
      </MemoryRouter>
    );

    const readmeBtn = screen.getByText(/readme/i);
    fireEvent.click(readmeBtn);

    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/example/readme',
      '_blank'
    );
  });
});