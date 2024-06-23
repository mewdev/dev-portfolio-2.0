import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: z.object({
        projectName: z.string(),
        projectUrl: z.string(),
        projectDiscography: z.array(z.object({
            albumName: z.string(),
            albumYear: z.number(),
            albumCover: z.string()
        }))
    })
})

// How this code exactly works?
export const collections = {
    projects: projectsCollection
}