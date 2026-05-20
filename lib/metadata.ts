import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Rosaire Kakpo - Développeur Frontend',
  description: 'Portfolio de Rosaire Kakpo, développeur frontend spécialisé en web, e-commerce et UX Design.',
  keywords: ['développeur', 'web', 'mobile', 'e-commerce', 'IoT', 'portfolio'],
  authors: [{ name: 'Rosaire Kakpo' }],
  creator: 'Rosaire Kakpo',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://rosairekakpo.com',
    siteName: 'Rosaire Kakpo',
    title: 'Rosaire Kakpo - Développeur Frontend',
    description: 'Portfolio de Rosaire Kakpo, développeur frontend spécialisé en web, e-commerce et UX Design.',
    images: [
      {
        url: 'https://rosairekakpo.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rosaire Kakpo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rosaire Kakpo - Développeur Frontend',
    description: 'Portfolio de Rosaire Kakpo, développeur frontend spécialisé en web, e-commerce et UX Design.',
    images: ['https://rosairekakpo.com/og-image.jpg'],
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  const url = `https://rosairekakpo.com${path}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url,
      siteName: 'Rosaire Kakpo',
      title,
      description,
      images: [
        {
          url: 'https://rosairekakpo.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://rosairekakpo.com/og-image.jpg'],
    },
  };
}

export function generateProjectMetadata(
  title: string,
  description: string,
  slug: string,
  image?: string
): Metadata {
  const url = `https://rosairekakpo.com/projets/${slug}`;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url,
      siteName: 'Rosaire Kakpo',
      title,
      description,
      images: [
        {
          url: image || 'https://rosairekakpo.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || 'https://rosairekakpo.com/og-image.jpg'],
    },
  };
}
