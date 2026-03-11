import { defineCollection, z } from 'astro:content';

const concerts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lieu: z.string().optional(),
    program: z.array(z.string()).optional(),
  }),
});

const lieux = defineCollection({
  type: 'content',
  schema: z.object({
    nom: z.string(),
    adresse: z.string().optional(),
    ville: z.string().optional(),
    cp: z.string().optional(),
  }),
});

const morceaux = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    composer: z.string().optional(),
    work: z.string().optional(),
    category: z.enum(['Baroque', 'Renaissance', 'Klezmer', 'Autre']),
  }),
});

const extraits = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date_event: z.string().optional(),
    type: z.enum(['audio', 'video']),
    audio_file: z.string().optional(),
    video_link: z.string().optional(),
    thumbnail: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    subtitle: z.string().optional(),
    year: z.number().optional(),
    type: z.enum(['photo', 'text']).default('photo'),
    order: z.number().default(99999),
  }),
});

export const collections = {
  concerts,
  lieux,
  morceaux,
  extraits,
  photos,
};
