import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = {
    projects: projectsCollection,
};