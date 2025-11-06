import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// ✅ Projects collection using the new loader API
const projects = defineCollection({
    loader: glob({pattern: "**/*.md",base: "src/content/projects",}),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
    }),
});

// ✅ Blogs collection using the new loader API
const blogs = defineCollection({
    loader: glob({pattern: "**/*.md",base: "src/content/blogs",}),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string().optional(),
    }),
});

export const collections = { projects, blogs };