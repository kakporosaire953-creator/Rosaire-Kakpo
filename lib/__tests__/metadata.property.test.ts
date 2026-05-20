import { generatePageMetadata, generateProjectMetadata } from '../metadata';

/**
 * Property Test: SEO Metadata Uniqueness
 * 
 * For any page in the portfolio, the page title and meta description SHALL be 
 * unique and descriptive, and SHALL NOT be empty or generic.
 * 
 * Validates: Requirements 10.1, 10.2
 * Feature: portfolio-multi-page, Property 7: SEO Metadata Uniqueness
 */
describe('Metadata - Property: SEO Metadata Uniqueness', () => {
  describe('generatePageMetadata', () => {
    it('should generate metadata with non-empty title', () => {
      const metadata = generatePageMetadata(
        'Test Page',
        'Test description',
        '/test'
      );

      expect(metadata.title).toBeDefined();
      expect(metadata.title).not.toBe('');
      expect(typeof metadata.title).toBe('string');
    });

    it('should generate metadata with non-empty description', () => {
      const metadata = generatePageMetadata(
        'Test Page',
        'Test description',
        '/test'
      );

      expect(metadata.description).toBeDefined();
      expect(metadata.description).not.toBe('');
      expect(typeof metadata.description).toBe('string');
    });

    it('should generate unique titles for different pages', () => {
      const metadata1 = generatePageMetadata(
        'Page 1',
        'Description 1',
        '/page1'
      );
      const metadata2 = generatePageMetadata(
        'Page 2',
        'Description 2',
        '/page2'
      );

      expect(metadata1.title).not.toBe(metadata2.title);
    });

    it('should generate unique descriptions for different pages', () => {
      const metadata1 = generatePageMetadata(
        'Page 1',
        'Description 1',
        '/page1'
      );
      const metadata2 = generatePageMetadata(
        'Page 1',
        'Description 2',
        '/page2'
      );

      expect(metadata1.description).not.toBe(metadata2.description);
    });

    it('should include OpenGraph metadata', () => {
      const metadata = generatePageMetadata(
        'Test Page',
        'Test description',
        '/test'
      );

      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBe('Test Page');
      expect(metadata.openGraph?.description).toBe('Test description');
    });

    it('should include Twitter metadata', () => {
      const metadata = generatePageMetadata(
        'Test Page',
        'Test description',
        '/test'
      );

      expect(metadata.twitter).toBeDefined();
      expect(metadata.twitter?.title).toBe('Test Page');
      expect(metadata.twitter?.description).toBe('Test description');
    });

    it('should not have generic or placeholder titles', () => {
      const metadata = generatePageMetadata(
        'About Page',
        'Learn more about us',
        '/about'
      );

      const title = metadata.title as string;
      expect(title).not.toMatch(/^(Page|Title|Untitled|New Page)$/i);
      expect(title.length).toBeGreaterThan(5);
    });

    it('should not have generic or placeholder descriptions', () => {
      const metadata = generatePageMetadata(
        'About Page',
        'Learn more about us',
        '/about'
      );

      const description = metadata.description as string;
      expect(description).not.toMatch(/^(Description|Page description|No description)$/i);
      expect(description.length).toBeGreaterThan(10);
    });
  });

  describe('generateProjectMetadata', () => {
    it('should generate project metadata with non-empty title', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug'
      );

      expect(metadata.title).toBeDefined();
      expect(metadata.title).not.toBe('');
    });

    it('should generate project metadata with non-empty description', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug'
      );

      expect(metadata.description).toBeDefined();
      expect(metadata.description).not.toBe('');
    });

    it('should generate unique titles for different projects', () => {
      const metadata1 = generateProjectMetadata(
        'Project 1',
        'Description 1',
        'project-1'
      );
      const metadata2 = generateProjectMetadata(
        'Project 2',
        'Description 2',
        'project-2'
      );

      expect(metadata1.title).not.toBe(metadata2.title);
    });

    it('should generate unique descriptions for different projects', () => {
      const metadata1 = generateProjectMetadata(
        'Project 1',
        'Description 1',
        'project-1'
      );
      const metadata2 = generateProjectMetadata(
        'Project 1',
        'Description 2',
        'project-2'
      );

      expect(metadata1.description).not.toBe(metadata2.description);
    });

    it('should include project slug in URL', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'my-project'
      );

      expect(metadata.openGraph?.url).toContain('my-project');
    });

    it('should include OpenGraph metadata for projects', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug'
      );

      expect(metadata.openGraph).toBeDefined();
      expect(metadata.openGraph?.title).toBe('Project Title');
      expect(metadata.openGraph?.description).toBe('Project description');
    });

    it('should include Twitter metadata for projects', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug'
      );

      expect(metadata.twitter).toBeDefined();
      expect(metadata.twitter?.title).toBe('Project Title');
      expect(metadata.twitter?.description).toBe('Project description');
    });

    it('should handle custom project images', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug',
        '/custom-image.jpg'
      );

      expect(metadata.openGraph?.images).toBeDefined();
      expect(metadata.openGraph?.images?.[0].url).toContain('custom-image.jpg');
    });

    it('should use default image when not provided', () => {
      const metadata = generateProjectMetadata(
        'Project Title',
        'Project description',
        'project-slug'
      );

      expect(metadata.openGraph?.images).toBeDefined();
      expect(metadata.openGraph?.images?.[0].url).toContain('og-image.jpg');
    });
  });

  describe('Metadata consistency across pages', () => {
    it('should maintain consistent format for all page titles', () => {
      const pages = [
        { title: 'Home', desc: 'Home page', path: '/' },
        { title: 'About', desc: 'About page', path: '/about' },
        { title: 'Projects', desc: 'Projects page', path: '/projects' },
      ];

      const metadatas = pages.map((page) =>
        generatePageMetadata(page.title, page.desc, page.path)
      );

      metadatas.forEach((metadata) => {
        expect(metadata.title).toBeDefined();
        expect(metadata.description).toBeDefined();
        expect(metadata.openGraph).toBeDefined();
        expect(metadata.twitter).toBeDefined();
      });
    });

    it('should not have duplicate titles across different pages', () => {
      const pages = [
        { title: 'Home', desc: 'Home page', path: '/' },
        { title: 'About', desc: 'About page', path: '/about' },
        { title: 'Projects', desc: 'Projects page', path: '/projects' },
        { title: 'Contact', desc: 'Contact page', path: '/contact' },
      ];

      const titles = pages.map((page) =>
        generatePageMetadata(page.title, page.desc, page.path).title
      );

      const uniqueTitles = new Set(titles);
      expect(uniqueTitles.size).toBe(titles.length);
    });

    it('should not have duplicate descriptions across different pages', () => {
      const pages = [
        { title: 'Home', desc: 'Home page description', path: '/' },
        { title: 'About', desc: 'About page description', path: '/about' },
        { title: 'Projects', desc: 'Projects page description', path: '/projects' },
      ];

      const descriptions = pages.map((page) =>
        generatePageMetadata(page.title, page.desc, page.path).description
      );

      const uniqueDescriptions = new Set(descriptions);
      expect(uniqueDescriptions.size).toBe(descriptions.length);
    });
  });
});
