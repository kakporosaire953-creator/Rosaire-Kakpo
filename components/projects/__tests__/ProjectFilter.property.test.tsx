import { getProjectsByCategory, getAllProjects } from '@/lib/projects';
import { PROJECT_CATEGORIES } from '@/lib/constants';

/**
 * Property Test: Project Filter Accuracy
 * 
 * For any category filter applied on the projects page, all displayed project cards 
 * SHALL have a category matching the selected filter, and no projects from other 
 * categories SHALL be displayed.
 * 
 * Validates: Requirements 5.3, 12.4
 * Feature: portfolio-multi-page, Property 2: Project Filter Accuracy
 */
describe('ProjectFilter - Property: Filter Accuracy', () => {
  describe('Category filtering', () => {
    // Test each category
    PROJECT_CATEGORIES.forEach((category) => {
      if (category.id === 'all') {
        it(`should return all projects when filtering by "${category.id}"`, () => {
          const filtered = getProjectsByCategory(category.id);
          const all = getAllProjects();

          expect(filtered.length).toBe(all.length);
          expect(filtered).toEqual(all);
        });
      } else {
        it(`should return only ${category.id} projects when filtering by "${category.id}"`, () => {
          const filtered = getProjectsByCategory(category.id);

          // All filtered projects should have the correct category
          filtered.forEach((project) => {
            expect(project.category).toBe(category.id);
          });
        });

        it(`should not include non-${category.id} projects when filtering by "${category.id}"`, () => {
          const filtered = getProjectsByCategory(category.id);
          const all = getAllProjects();

          // Get all projects NOT in this category
          const otherProjects = all.filter((p) => p.category !== category.id);

          // Ensure no other projects are in the filtered results
          otherProjects.forEach((otherProject) => {
            expect(filtered).not.toContainEqual(otherProject);
          });
        });
      }
    });
  });

  describe('Filter consistency', () => {
    it('should return consistent results for the same category', () => {
      const filtered1 = getProjectsByCategory('web');
      const filtered2 = getProjectsByCategory('web');

      expect(filtered1).toEqual(filtered2);
    });

    it('should return empty array for non-existent category', () => {
      const filtered = getProjectsByCategory('non-existent-category');
      expect(filtered).toEqual([]);
    });

    it('should maintain project data integrity after filtering', () => {
      const filtered = getProjectsByCategory('web');

      filtered.forEach((project) => {
        expect(project).toHaveProperty('slug');
        expect(project).toHaveProperty('title');
        expect(project).toHaveProperty('category');
        expect(project).toHaveProperty('technologies');
        expect(project).toHaveProperty('year');
      });
    });
  });

  describe('Filter completeness', () => {
    it('should cover all projects across all categories', () => {
      const allProjects = getAllProjects();
      const categories = PROJECT_CATEGORIES.filter((c) => c.id !== 'all').map(
        (c) => c.id
      );

      const projectsByCategory = categories.map((cat) =>
        getProjectsByCategory(cat)
      );

      const allFilteredProjects = projectsByCategory.flat();

      expect(allFilteredProjects.length).toBe(allProjects.length);
    });

    it('should not have duplicate projects across categories', () => {
      const categories = PROJECT_CATEGORIES.filter((c) => c.id !== 'all').map(
        (c) => c.id
      );

      const allSlugs: string[] = [];

      categories.forEach((cat) => {
        const filtered = getProjectsByCategory(cat);
        filtered.forEach((project) => {
          allSlugs.push(project.slug);
        });
      });

      const uniqueSlugs = new Set(allSlugs);
      expect(uniqueSlugs.size).toBe(allSlugs.length);
    });
  });

  describe('Filter edge cases', () => {
    it('should handle empty category gracefully', () => {
      const filtered = getProjectsByCategory('');
      expect(Array.isArray(filtered)).toBe(true);
    });

    it('should handle case-sensitive category matching', () => {
      const filtered1 = getProjectsByCategory('web');
      const filtered2 = getProjectsByCategory('WEB');

      // Should not match due to case sensitivity
      expect(filtered2.length).toBe(0);
    });

    it('should return all projects when category is "all"', () => {
      const filtered = getProjectsByCategory('all');
      const all = getAllProjects();

      expect(filtered.length).toBe(all.length);
    });
  });
});
