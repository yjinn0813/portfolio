// 연락처 카드 컴포넌트 테스트 코드

import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ContactCard from './ContactCard';

describe('ContactCard', () => {
  const mockProps = {
    label: 'GitHub',
    href: 'https://github.com/yjinn0813',
    text: 'https://github.com/yjinn0813',
    img: '../assets/contact/github.png',
  };

  test('render label and text', () => {
    render(<ContactCard {...mockProps} />);

    expect(screen.getByText('GitHub')).toBeInTheDocument();

    expect(screen.getByText('https://github.com/yjinn0813')).toBeInTheDocument();
  });

  test('render link', () => {
    render(<ContactCard {...mockProps} />);

    const link = screen.getByRole('link');

    expect(link).toHaveAttribute(
      'href',
      'https://github.com/yjinn0813'
    );

    expect(link).toHaveAttribute(
      'target',
      '_blank'
    );
  });

  test('render img with alt text', () => {
    render(<ContactCard {...mockProps} />);

    const image = screen.getByAltText(
      'GitHub preview'
    );

    expect(image).toBeInTheDocument();
  })
})