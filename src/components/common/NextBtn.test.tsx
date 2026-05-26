// nextBtn vitest code

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import NextBtn from './NextBtn';

describe('NextBtn', () => {
  test('render btn next', () => {
    render(
      <MemoryRouter>
        <NextBtn to="/skill" text="Check my stacks 👀" />
      </MemoryRouter>
    );
    expect(screen.getByText('Check my stacks 👀')).toBeInTheDocument();
  });

  test('render link path', () => {
    render(
      <MemoryRouter>
        <NextBtn to="/skill" text="Check my stacks 👀" />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/skill');
  });
});