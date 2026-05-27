/* project page vitest code */

import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Project from './Project';

describe('Project page', () => {
  test('open modal when preview clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Project />
      </MemoryRouter>
    );

    const preview = container.querySelector('.pj-preview');
    expect(preview).toBeInTheDocument();

    fireEvent.click(preview!);
    expect(
      container.querySelector('.pj-modal-overlay')
    ).toBeInTheDocument();
  });

  test('close modal with ESC key', () => {
    const { container } = render(
      <MemoryRouter>
        <Project />
      </MemoryRouter>
    );

    // 모달 오픈시 오버레이 등장
    const preview = container.querySelector('.pj-preview');
    fireEvent.click(preview!);
    expect(
      container.querySelector('.pj-modal-overlay')
    ).toBeInTheDocument();

    // ESC 입력시 모달 닫기
    fireEvent.keyDown(window, { key: 'Escape', });
    expect(
      container.querySelector('.pj-modal-overlay')
    ).not.toBeInTheDocument();
  });

  test('close modal when overlay clicked', () => {
    const { container } = render(
      <MemoryRouter>
        <Project />
      </MemoryRouter>
    );

    // 모달 오픈시 오버레이 등장
    const preview = container.querySelector('.pj-preview');
    fireEvent.click(preview!);

    const overlay = container.querySelector(
      '.pj-modal-overlay'
    );
    expect(overlay).toBeInTheDocument();

    // 오버레이 클릭시 모달 닫기
    fireEvent.click(overlay!);
    expect(
      container.querySelector('.pj-modal-overlay')
    ).not.toBeInTheDocument();
  });
});