/* Experience page vitest code */

import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import Experience from './Experience';

describe('Experience page', () => {
  beforeEach(() => {
    type ObserverCallback = (
      entries: IntersectionObserverEntry[]
    ) => void;

    vi.stubGlobal(
      'IntersectionObserver',
      class {
        cb: ObserverCallback;

        constructor(cb: ObserverCallback) {
          this.cb = cb;
        }

        observe(target: Element) {
          this.cb(
            [
              {
                isIntersecting: true,
                target,
                // 소스코드: entry.target.getAttribute('data-id')
              } as IntersectionObserverEntry,
            ]
          );
        }

        disconnect() {}
        unobserve() {}
      }
    );
  });

  test('add active class to timeline dot', async () => {
    const { container } = render(
      <MemoryRouter>
        <Experience />
      </MemoryRouter>
    );

    const activeDot = container.querySelector('.timeline-dot.active');

    await waitFor(() => {
      expect(activeDot).toBeInTheDocument();
    });
  });
});