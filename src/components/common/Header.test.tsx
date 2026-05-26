// header comp vitest code

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Header from './Header';

describe('Header', () => {
  /* 내비바 링크 렌더링 */
  test('render nav links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Stacks')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  /* 내비바 경로 확인 */
  test('render nav paths', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toHaveAttribute('href', '/about');
  });

  /* 스크롤 내려가면 헤더 숨김 */
  test('hide header when scrolling down', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = document.querySelector('header');

    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 100,
    });
    fireEvent.scroll(window);

    expect(header).toHaveClass('hide');
  });

  /* 스크롤 올라오면 헤더 등장 */
  test('show header when scrolling up', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    const header = document.querySelector('header');

    // 먼저 아래로 스크롤
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 100,
    });
    fireEvent.scroll(window);

    // 다시 위로 스크롤
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 50,
    });
    fireEvent.scroll(window);

    expect(header).toHaveClass('show');
  });
});