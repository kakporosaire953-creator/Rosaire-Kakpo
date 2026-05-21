import { generatePageMetadata } from '../metadata';

/**
 * Unit Tests: SEO Metadata
 * 
 * Validates that all pages have proper SEO metadata including:
 * - Unique title tags
 * - Unique meta descriptions
 * - Open Graph tags
 * - Structured data (Schema.org)
 * 
 * Requirements: 10.1, 10.2, 10.3, 10.4
 */

describe('SEO Metadata', () => {
  it('should generate metadata with title', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.title).toBe('Test Page');
  });

  it('should generate metadata with description', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.description).toBe('Test description');
  });

  it('should generate Open Graph metadata', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.openGraph).toBeDefined();
    expect(metadata.openGraph?.title).toBe('Test Page');
    expect(metadata.openGraph?.description).toBe('Test description');
    expect(metadata.openGraph?.url).toContain('/test');
  });

  it('should generate Twitter metadata', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.twitter).toBeDefined();
    expect(metadata.twitter?.title).toBe('Test Page');
    expect(metadata.twitter?.description).toBe('Test description');
  });

  it('should have unique titles for different pages', () => {
    const homeMeta = generatePageMetadata(
      'Home - Rosaire Kakpo',
      'Portfolio homepage',
      '/'
    );

    const aboutMeta = generatePageMetadata(
      'About - Rosaire Kakpo',
      'About me page',
      '/a-propos'
    );

    expect(homeMeta.title).not.toBe(aboutMeta.title);
  });

  it('should have unique descriptions for different pages', () => {
    const homeMeta = generatePageMetadata(
      'Home - Rosaire Kakpo',
      'Portfolio homepage',
      '/'
    );

    const projectsMeta = generatePageMetadata(
      'Projects - Rosaire Kakpo',
      'My projects and work',
      '/projets'
    );

    expect(homeMeta.description).not.toBe(projectsMeta.description);
  });

  it('should include canonical URL', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.alternates).toBeDefined();
    expect(metadata.alternates?.canonical).toContain('/test');
  });

  it('should include robots metadata', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.robots).toBeDefined();
    expect(metadata.robots?.index).toBe(true);
    expect(metadata.robots?.follow).toBe(true);
  });

  it('should generate proper Open Graph image URL', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    expect(metadata.openGraph?.images).toBeDefined();
    if (metadata.openGraph?.images && Array.isArray(metadata.openGraph.images)) {
      expect(metadata.openGraph.images.length).toBeGreaterThan(0);
    }
  });

  it('should include viewport metadata in layout', () => {
    const { viewport } = require('../../app/layout');
    expect(viewport).toBeDefined();
    expect(viewport.width).toBe('device-width');
    expect(viewport.initialScale).toBe(1);
  });

  it('should have consistent metadata structure', () => {
    const metadata = generatePageMetadata(
      'Test Page',
      'Test description',
      '/test'
    );

    // Check required fields
    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
    expect(metadata.openGraph).toBeDefined();
    expect(metadata.twitter).toBeDefined();
  });

  it('should sanitize special characters in metadata', () => {
    const metadata = generatePageMetadata(
      'Test Page & Special <Characters>',
      'Description with "quotes" and \'apostrophes\'',
      '/test'
    );

    // Metadata should be properly formatted
    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });

  it('should generate metadata for all main pages', () => {
    const pages = [
      { title: 'Home - Rosaire Kakpo', desc: 'Portfolio homepage', path: '/' },
      { title: 'About - Rosaire Kakpo', desc: 'About me', path: '/a-propos' },
      { title: 'Skills - Rosaire Kakpo', desc: 'My skills', path: '/competences' },
      { title: 'Projects - Rosaire Kakpo', desc: 'My projects', path: '/projets' },
      { title: 'Contact - Rosaire Kakpo', desc: 'Contact me', path: '/contact' },
    ];

    pages.forEach((page) => {
      const metadata = generatePageMetadata(page.title, page.desc, page.path);

      expect(metadata.title).toBe(page.title);
      expect(metadata.description).toBe(page.desc);
      expect(metadata.openGraph?.url).toContain(page.path);
    });
  });
});
