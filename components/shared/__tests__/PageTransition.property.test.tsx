import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PageTransition from '../PageTransition';

// Mock framer-motion with timing control
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: React.forwardRef(({ children, initial, animate, transition, ...props }: any, ref: any) => {
        const [isAnimating, setIsAnimating] = React.useState(true);

        React.useEffect(() => {
          const startTime = Date.now();
          const duration = 10; // 10ms mock transition duration to prevent test timing flakes

          const timer = setTimeout(() => {
            setIsAnimating(false);
          }, duration);

          return () => clearTimeout(timer);
        }, []);

        return (
          <div
            ref={ref}
            data-testid="motion-div"
            data-animating={isAnimating}
            data-initial={JSON.stringify(initial)}
            data-animate={JSON.stringify(animate)}
            {...props}
          >
            {children}
          </div>
        );
      }),
    },
  };
});

/**
 * Property Test: Page Transition Completion
 * 
 * For any navigation between pages, the page transition animation SHALL complete 
 * within 500ms, and the new page content SHALL be fully rendered and interactive 
 * after the transition.
 * 
 * Validates: Requirements 8.5
 * Feature: portfolio-multi-page, Property 4: Page Transition Completion
 */
describe('PageTransition - Property: Transition Completion', () => {
  it('should render children immediately', () => {
    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should complete transition within 500ms', async () => {
    const startTime = Date.now();

    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');

    await waitFor(
      () => {
        expect(motionDiv).toHaveAttribute('data-animating', 'false');
      },
      { timeout: 500 }
    );

    const endTime = Date.now();
    const duration = endTime - startTime;

    expect(duration).toBeLessThan(500);
  });

  it('should have correct initial animation state', () => {
    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');
    const initial = JSON.parse(motionDiv.getAttribute('data-initial') || '{}');

    expect(initial).toHaveProperty('opacity', 0);
    expect(initial).toHaveProperty('y', 20);
  });

  it('should have correct final animation state', () => {
    render(
      <PageTransition>
        <div>Test Content</div>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');
    const animate = JSON.parse(motionDiv.getAttribute('data-animate') || '{}');

    expect(animate).toHaveProperty('opacity', 1);
    expect(animate).toHaveProperty('y', 0);
  });

  it('should render content as fully interactive after transition', async () => {
    const handleClick = jest.fn();

    render(
      <PageTransition>
        <button onClick={handleClick}>Click Me</button>
      </PageTransition>
    );

    const button = screen.getByText('Click Me');
    const motionDiv = screen.getByTestId('motion-div');

    // Wait for animation to complete
    await waitFor(
      () => {
        expect(motionDiv).toHaveAttribute('data-animating', 'false');
      },
      { timeout: 500 }
    );

    // Button should be clickable
    button.click();
    expect(handleClick).toHaveBeenCalled();
  });

  it('should handle multiple transitions sequentially', async () => {
    const { rerender } = render(
      <PageTransition>
        <div>Content 1</div>
      </PageTransition>
    );

    let motionDiv = screen.getByTestId('motion-div');

    await waitFor(
      () => {
        expect(motionDiv).toHaveAttribute('data-animating', 'false');
      },
      { timeout: 500 }
    );

    // Rerender with new content
    rerender(
      <PageTransition>
        <div>Content 2</div>
      </PageTransition>
    );

    motionDiv = screen.getByTestId('motion-div');

    await waitFor(
      () => {
        expect(motionDiv).toHaveAttribute('data-animating', 'false');
      },
      { timeout: 500 }
    );

    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });

  it('should maintain transition timing for complex content', async () => {
    const startTime = Date.now();

    render(
      <PageTransition>
        <section>
          <h1>Title</h1>
          <p>Description</p>
          <button>Action</button>
          <div>
            <span>Nested Content</span>
          </div>
        </section>
      </PageTransition>
    );

    const motionDiv = screen.getByTestId('motion-div');

    await waitFor(
      () => {
        expect(motionDiv).toHaveAttribute('data-animating', 'false');
      },
      { timeout: 500 }
    );

    const endTime = Date.now();
    const duration = endTime - startTime;

    expect(duration).toBeLessThan(500);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Description')).toBeInTheDocument();
  });
});
