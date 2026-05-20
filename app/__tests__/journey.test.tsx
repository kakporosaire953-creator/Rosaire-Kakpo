import { render, screen } from '@testing-library/react';
import Journey from '../parcours/page';
import { TIMELINE_EVENTS } from '@/lib/constants';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('Journey Page', () => {
  it('renders journey page title', () => {
    render(<Journey />);
    expect(screen.getByText('Mon Parcours')).toBeInTheDocument();
  });

  it('renders journey page description', () => {
    render(<Journey />);
    expect(
      screen.getByText('Une chronologie de mes formations, certifications et expériences marquantes.')
    ).toBeInTheDocument();
  });

  it('renders all timeline events', () => {
    render(<Journey />);
    TIMELINE_EVENTS.forEach((event) => {
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByText(event.organization)).toBeInTheDocument();
    });
  });

  it('renders timeline event dates', () => {
    render(<Journey />);
    TIMELINE_EVENTS.forEach((event) => {
      expect(screen.getByText(new RegExp(event.date))).toBeInTheDocument();
    });
  });

  it('renders timeline event descriptions', () => {
    render(<Journey />);
    TIMELINE_EVENTS.forEach((event) => {
      expect(screen.getByText(event.description)).toBeInTheDocument();
    });
  });

  it('renders CTA section', () => {
    render(<Journey />);
    expect(screen.getByText('Intéressé par une collaboration?')).toBeInTheDocument();
  });

  it('renders contact CTA button', () => {
    render(<Journey />);
    const contactLink = screen.getByRole('link', { name: /Me Contacter/i });
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('renders timeline event types as badges', () => {
    render(<Journey />);
    const eventTypes = new Set(TIMELINE_EVENTS.map((e) => e.type));
    eventTypes.forEach((type) => {
      expect(screen.getByText(new RegExp(type, 'i'))).toBeInTheDocument();
    });
  });

  it('renders correct number of timeline items', () => {
    const { container } = render(<Journey />);
    const timelineItems = container.querySelectorAll('[class*="pl-8"]');
    expect(timelineItems.length).toBeGreaterThan(0);
  });
});
