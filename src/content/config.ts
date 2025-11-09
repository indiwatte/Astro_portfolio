import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "src/content/projects",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        image: z.any().optional(), 
    }),
});

const journals = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "src/content/journals",
    }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
        image: z.any().optional(), 
    }),
});

export const collections = { projects, journals };