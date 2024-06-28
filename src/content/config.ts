import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
    schema: ({image}) => z.object({
        name: z.string(),
        github: z.string(),
        live: z.string(),
        techstack: z.array(z.string()),
        image: image(),
        shortDescription: z.string()
    })
})

// How this code exactly works?
export const collections = {
    projects: projectsCollection
}




// projectDiscography: z.array(z.object({
//     albumName: z.string(),
//     albumYear: z.number(),
//     albumCover: z.string()
// })),