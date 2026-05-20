import React from 'react';
import { render } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader Component', () => {
  it('renders loader component', () => {
    const { container } = render(<Loader />);
    
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders with fixed positioning', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild;
    expect(loader).toHaveClass('fixed');
    expect(loader).toHaveClass('inset-0');
  });

  it('renders with semi-transparent background', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild;
    expect(loader).toHaveClass('bg-opacity-50');
  });

  it('renders spinner animation', () => {
    const { container } = render(<Loader />);
    
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('renders with high z-index', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild;
    expect(loader).toHaveClass('z-50');
  });

  it('renders with pointer-events-none', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild;
    expect(loader).toHaveClass('pointer-events-none');
  });

  it('renders centered content', () => {
    const { container } = render(<Loader />);
    
    const loader = container.firstChild;
    expect(loader).toHaveClass('flex');
    expect(loader).toHaveClass('items-center');
    expect(loader).toHaveClass('justify-center');
  });
});
