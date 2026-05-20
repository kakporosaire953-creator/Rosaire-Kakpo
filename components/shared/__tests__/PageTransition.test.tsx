import React from 'react';
import { render, screen } from '@testing-library/react';
import PageTransition from '../PageTransition';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => (
      <div data-testid="motion-div" {...props}>
        {children}
      </div>
    ),
  },
}));

describe('PageTransition Component', () => {
  it('renders children', () => {
    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders motion div', () => {
    const { container } = render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );
    
    const motionDiv = container.querySelector('[data-testid="motion-div"]');
    expect(motionDiv).toBeInTheDocument();
  });

  it('renders multiple children', () => {
    render(
      <PageTransition>
        <div>Content 1</div>
        <div>Content 2</div>
      </PageTransition>
    );
    
    expect(screen.getByText('Content 1')).toBeInTheDocument();
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('renders complex children', () => {
    render(
      <PageTransition>
        <section>
          <h1>Title</h1>
          <p>Description</p>
        </section>
      </PageTransition>
    );
    
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
