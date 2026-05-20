import { getProjectBySlug, getAdjacentProjects, getProjectSlugs } from '../projects';

/**
 * Property Test: Project Detail Page Slug Resolution
 * 
 * For any valid project slug in the URL, the project detail page SHALL load and 
 * display the correct project data matching that slug, and invalid slugs SHALL 
 * result in a 404 error.
 * 
 * Validates: Requirements 6.1, 12.5
 * Feature: portfolio-multi-page, Property 3: Project Detail Page Slug Resolution
 */
describe('Projects - Property: Slug Resolution', () => {
  describe('Valid slug resolution', () => {
    it('should resolve all valid project slugs', () => {
      const slugs = getProjectSlugs();

      slugs.forEach((slug) => {
        const project = getProjectBySlug(slug);
        expect(project).toBeDefined();
        expect(project?.slug).toBe(slug);
      });
    });

    it('should return correct project data for each slug', () => {
      const slugs = getProjectSlugs();

      slugs.forEach((slug) => {
        const project = getProjectBySlug(slug);

        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('category');
        expect(project).toHaveProperty('description');
        expect(project).toHaveProperty('technologies');
        expect(project?.slug).toBe(slug);
      });
    });

    it('should maintain data consistency for same slug', () => {
      const slugs = getProjectSlugs();

      slugs.forEach((slug) => {
        const project1 = getProjectBySlug(slug);
        const project2 = getProjectBySlug(slug);

        expect(project1).toEqual(project2);
      });
    });
  });

  describe('Invalid slug handling', () => {
    it('should return undefined for non-existent slug', () => {
      const project = getProjectBySlug('non-existent-project-slug');
      expect(project).toBeUndefined();
    });

    it('should return undefined for empty slug', () => {
      const project = getProjectBySlug('');
      expect(project).toBeUndefined();
    });

    it('should return undefined for null-like slugs', () => {
      expect(getProjectBySlug('null')).toBeUndefined();
      expect(getProjectBySlug('undefined')).toBeUndefined();
    });

    it('should be case-sensitive for slug matching', () => {
      const slugs = getProjectSlugs();
      if (slugs.length > 0) {
        const slug = slugs[0];
        const upperSlug = slug.toUpperCase();

        const project = getProjectBySlug(slug);
        const projectUpper = getProjectBySlug(upperSlug);

        expect(project).toBeDefined();
        expect(projectUpper).toBeUndefined();
      }
    });
  });
});

/**
 * Property Test: Project Navigation Continuity
 * 
 * For any project detail page, the previous and next project navigation links 
 * SHALL correctly point to adjacent projects in the project list, and SHALL not 
 * create broken links.
 * 
 * Validates: Requirements 6.5
 * Feature: portfolio-multi-page, Property 8: Project Navigation Continuity
 */
describe('Projects - Property: Navigation Continuity', () => {
  describe('Adjacent project navigation', () => {
    it('should return correct adjacent projects for middle projects', () => {
      const slugs = getProjectSlugs();

      if (slugs.length > 2) {
        const middleSlug = slugs[1];
        const adjacent = getAdjacentProjects(middleSlug);

        expect(adjacent.previous).toBeDefined();
        expect(adjacent.next).toBeDefined();
        expect(adjacent.previous?.slug).toBe(slugs[0]);
        expect(adjacent.next?.slug).toBe(slugs[2]);
      }
    });

    it('should return null for previous when at start', () => {
      const slugs = getProjectSlugs();

      if (slugs.length > 0) {
        const firstSlug = slugs[0];
        const adjacent = getAdjacentProjects(firstSlug);

        expect(adjacent.previous).toBeNull();
        expect(adjacent.next).toBeDefined();
      }
    });

    it('should return null for next when at end', () => {
      const slugs = getProjectSlugs();

      if (slugs.length > 0) {
        const lastSlug = slugs[slugs.length - 1];
        const adjacent = getAdjacentProjects(lastSlug);

        expect(adjacent.previous).toBeDefined();
        expect(adjacent.next).toBeNull();
      }
    });

    it('should return both null for single project', () => {
      const slugs = getProjectSlugs();

      if (slugs.length === 1) {
        const adjacent = getAdjacentProjects(slugs[0]);

        expect(adjacent.previous).toBeNull();
        expect(adjacent.next).toBeNull();
      }
    });
  });

  describe('Navigation link validity', () => {
    it('should return valid project objects for adjacent links', () => {
      const slugs = getProjectSlugs();

      slugs.forEach((slug) => {
        const adjacent = getAdjacentProjects(slug);

        if (adjacent.previous) {
          expect(adjacent.previous).toHaveProperty('slug');
          expect(adjacent.previous).toHaveProperty('title');
          expect(getProjectBySlug(adjacent.previous.slug)).toBeDefined();
        }

        if (adjacent.next) {
          expect(adjacent.next).toHaveProperty('slug');
          expect(adjacent.next).toHaveProperty('title');
          expect(getProjectBySlug(adjacent.next.slug)).toBeDefined();
        }
      });
    });

    it('should not create circular navigation', () => {
      const slugs = getProjectSlugs();

      if (slugs.length > 1) {
        const firstSlug = slugs[0];
        const adjacent = getAdjacentProjects(firstSlug);

        // First project should not have previous
        expect(adjacent.previous).toBeNull();

        // Next project should have first as previous
        if (adjacent.next) {
          const nextAdjacent = getAdjacentProjects(adjacent.next.slug);
          expect(nextAdjacent.previous?.slug).toBe(firstSlug);
        }
      }
    });
  });

  describe('Navigation consistency', () => {
    it('should maintain consistent navigation order', () => {
      const slugs = getProjectSlugs();

      for (let i = 0; i < slugs.length; i++) {
        const adjacent = getAdjacentProjects(slugs[i]);

        if (i > 0) {
          expect(adjacent.previous?.slug).toBe(slugs[i - 1]);
        } else {
          expect(adjacent.previous).toBeNull();
        }

        if (i < slugs.length - 1) {
          expect(adjacent.next?.slug).toBe(slugs[i + 1]);
        } else {
          expect(adjacent.next).toBeNull();
        }
      }
    });
  });
});
