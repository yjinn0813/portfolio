/* skill page vitest code */

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Skill from './Skill';

describe('Skill page', () => {
  test('toggle accordion when folder clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Skill />
      </MemoryRouter>
    );

    // Frontend 폴더 가져오기
    const folders = container.querySelectorAll('.skill-folder');
    const frontendFolder = folders[0];

    // 초기 상태
    expect(
      container.querySelector('.sk-item.open')
    ).toBeNull();

    // 아코디언 오픈
    fireEvent.click(frontendFolder);
    const openedAccordion = container.querySelector('.sk-item.open');
    expect(openedAccordion).toBeInTheDocument();
    expect(screen.getAllByText('Frontend').length).toBeGreaterThan(1);

    // 아코디언 닫기
    fireEvent.click(frontendFolder);
    expect(container.querySelector('.sk-item.open')).toBeNull();
  });

  test('render certificate accordion', () => {
    render(
      <MemoryRouter>
        <Skill />
      </MemoryRouter>
    );

    const certificate = screen.getByText('Achievement');
    fireEvent.click(certificate);
    expect(screen.getByText(/정보처리기사 필기 합격/i)).toBeInTheDocument();
  });
});