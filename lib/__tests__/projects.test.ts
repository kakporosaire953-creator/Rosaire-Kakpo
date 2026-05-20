import {
  getAllProjects,
  getProjectBySlug,
  getProjectsByCategory,
  getFeaturedProjects,
  getProjectsByIds,
  getAdjacentProjects,
  getProjectSlugs,
} from '../projects';

describe('Projects Utilities', () => {
  describe('getAllProjects', () => {
    it('returns all projects', () => {
      const projects = getAllProjects();
      expect(Array.isArray(projects)).toBe(true);
      expect(projects.length).toBeGreaterThan(0);
    });

    it('returns projects with correct structure', () => {
      const projects = getAllProjects();
      const project = projects[0];
      
      expect(project).toHaveProperty('slug');
      expect(project).toHaveProperty('title');
      expect(project).toHaveProperty('category');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('technologies');
    });
  });

  describe('getProjectBySlug', () => {
    it('returns project by slug', () => {
      const project = getProjectBySlug('ecommerce-platform');
      expect(project).toBeDefined();
      expect(project?.slug).toBe('ecommerce-platform');
    });

    it('returns undefined for non-existent slug', () => {
      const project = getProjectBySlug('non-existent-project');
      expect(project).toBeUndefined();
    });
  });

  describe('getProjectsByCategory', () => {
    it('returns all projects when category is "all"', () => {
      const projects = getProjectsByCategory('all');
      expect(projects.length).toBe(getAllProjects().length);
    });

    it('returns projects filtered by category', () => {
      const projects = getProjectsByCategory('web');
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach((project) => {
        expect(project.category).toBe('web');
      });
    });

    it('returns empty array for non-existent category', () => {
      const projects = getProjectsByCategory('non-existent');
      expect(projects.length).toBe(0);
    });
  });

  describe('getFeaturedProjects', () => {
    it('returns featured projects with default count', () => {
      const projects = getFeaturedProjects();
      expect(projects.length).toBeLessThanOrEqual(3);
    });

    it('returns featured projects with custom count', () => {
      const projects = getFeaturedProjects(2);
      expect(projects.length).toBeLessThanOrEqual(2);
    });

    it('returns projects in order', () => {
      const featured = getFeaturedProjects(2);
      const all = getAllProjects();
      
      expect(featured[0].slug).toBe(all[0].slug);
      expect(featured[1].slug).toBe(all[1].slug);
    });
  });

  describe('getProjectsByIds', () => {
    it('returns projects by ids', () => {
      const ids = ['ecommerce-platform', 'mobile-app'];
      const projects = getProjectsByIds(ids);
      
      expect(projects.length).toBe(2);
      expect(projects[0].slug).toBe('ecommerce-platform');
      expect(projects[1].slug).toBe('mobile-app');
    });

    it('returns empty array for non-existent ids', () => {
      const projects = getProjectsByIds(['non-existent-1', 'non-existent-2']);
      expect(projects.length).toBe(0);
    });

    it('returns partial results for mixed ids', () => {
      const ids = ['ecommerce-platform', 'non-existent'];
      const projects = getProjectsByIds(ids);
      
      expect(projects.length).toBe(1);
      expect(projects[0].slug).toBe('ecommerce-platform');
    });
  });

  describe('getAdjacentProjects', () => {
    it('returns previous and next projects', () => {
      const adjacent = getAdjacentProjects('mobile-app');
      
      expect(adjacent.previous).toBeDefined();
      expect(adjacent.next).toBeDefined();
    });

    it('returns null for previous when at start', () => {
      const adjacent = getAdjacentProjects('ecommerce-platform');
      expect(adjacent.previous).toBeNull();
    });

    it('returns null for next when at end', () => {
      const all = getAllProjects();
      const lastSlug = all[all.length - 1].slug;
      const adjacent = getAdjacentProjects(lastSlug);
      
      expect(adjacent.next).toBeNull();
    });

    it('returns correct adjacent projects', () => {
      const all = getAllProjects();
      const secondProject = all[1];
      const adjacent = getAdjacentProjects(secondProject.slug);
      
      expect(adjacent.previous?.slug).toBe(all[0].slug);
      expect(adjacent.next?.slug).toBe(all[2].slug);
    });
  });

  describe('getProjectSlugs', () => {
    it('returns array of slugs', () => {
      const slugs = getProjectSlugs();
      expect(Array.isArray(slugs)).toBe(true);
      expect(slugs.length).toBeGreaterThan(0);
    });

    it('returns only string slugs', () => {
      const slugs = getProjectSlugs();
      slugs.forEach((slug) => {
        expect(typeof slug).toBe('string');
      });
    });

    it('returns all project slugs', () => {
      const slugs = getProjectSlugs();
      const projects = getAllProjects();
      
      expect(slugs.length).toBe(projects.length);
    });
  });
});
