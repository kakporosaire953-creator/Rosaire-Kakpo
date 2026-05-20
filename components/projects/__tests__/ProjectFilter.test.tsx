import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ProjectFilter from '../ProjectFilter';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

describe('ProjectFilter Component', () => {
  const mockOnCategoryChange = jest.fn();

  beforeEach(() => {
    mockOnCategoryChange.mockClear();
  });

  it('renders all category buttons', () => {
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={mockOnCategoryChange}
        language="fr"
      />
    );

    expect(screen.getByText('Tous')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('E-commerce')).toBeInTheDocument();
    expect(screen.getByText('IoT')).toBeInTheDocument();
  });

  it('highlights active category', () => {
    render(
      <ProjectFilter
        activeCategory="web"
        onCategoryChange={mockOnCategoryChange}
        language="fr"
      />
    );

    const webButton = screen.getByText('Web').closest('button');
    expect(webButton).toHaveClass('bg-blue-600');
    expect(webButton).toHaveClass('text-white');
  });

  it('does not highlight inactive categories', () => {
    render(
      <ProjectFilter
        activeCategory="web"
        onCategoryChange={mockOnCategoryChange}
        language="fr"
      />
    );

    const mobileButton = screen.getByText('Mobile').closest('button');
    expect(mobileButton).toHaveClass('bg-slate-200');
    expect(mobileButton).not.toHaveClass('bg-blue-600');
  });

  it('calls onCategoryChange when button is clicked', () => {
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={mockOnCategoryChange}
        language="fr"
      />
    );

    const webButton = screen.getByText('Web').closest('button');
    fireEvent.click(webButton!);

    expect(mockOnCategoryChange).toHaveBeenCalledWith('web');
  });

  it('renders in English when language is en', () => {
    render(
      <ProjectFilter
        activeCategory="all"
        onCategoryChange={mockOnCategoryChange}
        language="en"
      />
    );

    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Web')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
  });
});
