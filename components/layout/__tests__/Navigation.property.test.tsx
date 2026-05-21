import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';
import { NAVIGATION_LINKS } from '@/lib/constants';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, className }: any) => (
    <a href={href} className={className}>{children}</a>
  );
});

/**
 * Property Test: Navigation Active State Consistency
 * 
 * For any page in the portfolio, the navigation menu SHALL highlight the link 
 * corresponding to the current page, and no other links SHALL be highlighted.
 * 
 * Validates: Requirements 1.3
 * Feature: portfolio-multi-page, Property 1: Navigation Active State Consistency
 */
describe('Navigation - Property: Active State Consistency', () => {
  // Generate test cases for all navigation links
  const testCases = NAVIGATION_LINKS.map((link) => ({
    pathname: link.href,
    expectedActive: link.label,
    expectedInactive: NAVIGATION_LINKS.filter((l) => l.href !== link.href).map((l) => l.label),
  }));

  testCases.forEach(({ pathname, expectedActive, expectedInactive }) => {
    it(`should highlight only the active link for pathname: ${pathname}`, () => {
      render(
        <Navigation pathname={pathname} language="fr" />
      );

      // Check that the active link is highlighted
      const activeLink = screen.getByText(expectedActive).closest('a');
      expect(activeLink).toHaveClass('text-blue-600');
      expect(activeLink).toHaveClass('border-blue-600');
      expect(activeLink).toHaveClass('font-semibold');

      // Check that all other links are NOT highlighted
      expectedInactive.forEach((inactiveLabel) => {
        const inactiveLink = screen.getByText(inactiveLabel).closest('a');
        expect(inactiveLink).not.toHaveClass('text-blue-600');
        expect(inactiveLink).not.toHaveClass('border-blue-600');
        expect(inactiveLink).toHaveClass('text-slate-600');
      });
    });
  });

  it('should have exactly one active link for any pathname', () => {
    NAVIGATION_LINKS.forEach((link) => {
      const { container } = render(
        <Navigation pathname={link.href} language="fr" />
      );

      const activeLinks = container.querySelectorAll('a.text-blue-600');
      expect(activeLinks.length).toBe(1);
    });
  });

  it('should maintain active state consistency across language changes', () => {
    const { rerender } = render(
      <Navigation pathname="/projets" language="fr" />
    );

    let activeLink = screen.getByText('Projets').closest('a');
    expect(activeLink).toHaveClass('text-blue-600');

    rerender(
      <Navigation pathname="/projets" language="en" />
    );

    activeLink = screen.getByText('Projects').closest('a');
    expect(activeLink).toHaveClass('text-blue-600');
  });

  it('should not highlight any link for unknown pathname', () => {
    const { container } = render(
      <Navigation pathname="/unknown-page" language="fr" />
    );

    const activeLinks = container.querySelectorAll('a.text-blue-600');
    expect(activeLinks.length).toBe(0);
  });
});
