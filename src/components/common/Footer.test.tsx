// footer comp vitest code

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, expect } from 'vitest';
import Footer from './Footer';

describe('Footer', () => {
  test('render footer text', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
  });

  test('render link', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    const link = screen.getByRole('link', {
      name: /visit github/i,
    });

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/yjinn0813'
    );

    expect(link).toHaveAttribute(
      'target',
      '_blank'
    );
  });
});