// top-btn vitest code

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import TopBtn from './TopBtn';

describe('TopBtn', () => {
  /* mock 생성하여 감지 테스트 */
  beforeEach(() => {
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    document.body.appendChild(footer);

    // IntersectionObserver mock
    vi.stubGlobal(
      'IntersectionObserver',
      class {
        observe(){}
        disconnect(){}
      }
    );

    // scrollTo mock
    window.scrollTo = vi.fn();
  });

  test('toggle button render when scrolling', () => {
    render(<TopBtn />);

    const button = screen.getByRole('button');

    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 1000,
    });

    // 먼저 아래로
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 600,
    });
    fireEvent.scroll(window);
    expect(button).toHaveClass('show');

    // 다시 위로
    Object.defineProperty(window, 'scrollY', {
      writable: true,
      configurable: true,
      value: 100,
    });
    fireEvent.scroll(window);
    expect(button).not.toHaveClass('show');
  });

  test('scroll to top when button clicked', () => {
    render(<TopBtn />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth',
    });
  });
});