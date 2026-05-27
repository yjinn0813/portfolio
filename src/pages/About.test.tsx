/* main page vitest code */

import { render, waitFor } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About page', () => {
  /* intersectionObserver mock */
  beforeEach(() => {
    type ObserverCallback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => void;

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: ObserverCallback;

        constructor(cb: ObserverCallback) {
          this.cb = cb;
          // 실제 콜백함수 저장
        }

        // 소스코드에서 observe() 실행 시 화면에 요소가 보인다고 가정
        // observer 실행이므로 인자 2개 넘긴다
        observe() {
          this.cb(
            [
              {
                isIntersecting: true,
              } as IntersectionObserverEntry,
            ],
            this as unknown as IntersectionObserver
          );
        }

        disconnect() {}
        unobserve() {}
      }
    );
  });

  test('add classname to philosophy box', async () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );

    const box = container.querySelector('.philosophy');

    await waitFor(() => {
      expect(box).toHaveClass('show');
    })
  });
});