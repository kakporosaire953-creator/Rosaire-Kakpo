import { Project } from './types';
import projectsData from '@/data/projects.json';

export function getAllProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.projects.find((project) => project.slug === slug) as Project | undefined;
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'all') {
    return projectsData.projects as Project[];
  }
  return projectsData.projects.filter((project) => project.category === category) as Project[];
}

export function getFeaturedProjects(count: number = 3): Project[] {
  return projectsData.projects.slice(0, count) as Project[];
}

export function getProjectsByIds(ids: string[]): Project[] {
  return projectsData.projects.filter((project) => ids.includes(project.slug)) as Project[];
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const projects = projectsData.projects as Project[];
  const currentIndex = projects.findIndex((p) => p.slug === slug);

  return {
    previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  };
}

export function getProjectSlugs(): string[] {
  return projectsData.projects.map((project) => project.slug);
}
