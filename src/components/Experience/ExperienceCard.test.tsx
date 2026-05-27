/* 경험 카드 vitest code */

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import type { ExperienceDataItem } from '../../types/experience';
import ExperienceCard from './ExperienceCard';

const mockData: ExperienceDataItem = {
  id: 1,
  period: '2024.01 ~ 2024.12',
  title: 'Company\nFrontend Developer',
  type: 'work',
  description: ['React 개발'],
  links: [
    {
      label: 'GitHub',
      url: 'https://github.com/test',
    },
  ],
  projects: [
    {
      id: 1,
      period: '2024.01 ~ 2024.03',
      name: 'Portfolio',
      stack: ['React', 'TypeScript'],
      details: ['프로젝트 상세 내용'],
    },
  ],
};

describe('ExperienceCard', () => {
  test('render card', () => {
    render(
      <MemoryRouter>
        <ExperienceCard data={mockData} />
      </MemoryRouter>
    )
    expect(screen.getByText(/2024.01 ~ 2024.12/i)).toBeInTheDocument();
    expect(screen.getByText(/React 개발/i)).toBeInTheDocument();
  });

  test('toggle project accordion', () => {
    render(
      <MemoryRouter>
        <ExperienceCard data={mockData} />
      </MemoryRouter>
    );

    const projectTitle = screen.getByText(/Portfolio/i);

    // 열기
    fireEvent.click(projectTitle);
    expect(projectTitle).toHaveClass('open');
    expect(screen.getByText(/프로젝트 상세 내용/i)).toBeInTheDocument();

    // 닫기
    fireEvent.click(projectTitle);
    expect(projectTitle).not.toHaveClass('open');
    expect(screen.queryByText(/프로젝트 상세 내용/i)).not.toBeInTheDocument();
  });

  test('render external link', () => {
    render(
      <MemoryRouter>
        <ExperienceCard data={mockData} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', {
      name: /github/i,
    });

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/test'
    );

    expect(link).toHaveAttribute(
      'target',
      '_blank'
    );
  });
});