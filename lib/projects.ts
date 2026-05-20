import { Project } from './types';
import projectsData from '@/data/projects.json';

export function getAllProjects(): Project[] {
  return projectsData.projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') {
    return projectsData.projects;
  }
  return projectsData.projects.filter((project) => project.category === category);
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projectsData.projects.slice(0, count);
}

export function getProjectsByIds(ids: string[]): Project[] {
  return projectsData.projects.filter((project) => ids.includes(project.slug));
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const projects = projectsData.projects;
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  return {
    previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

export function getProjectSlugs(): string[] {
  return projectsData.projects.map((project) => project.slug);
}
