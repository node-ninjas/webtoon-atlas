import { z } from 'zod'

const profileSchema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
})

const authorSchema = z.array(profileSchema)

const artistsSchema = z.array(profileSchema)

const publishersSchema = z.array(
    profileSchema.extend({
        type: z.array(z.string()),
    })
)

type authorsType = z.infer<typeof authorSchema>
type publishersType = z.infer<typeof publishersSchema>
type artistsType = z.infer<typeof artistsSchema>

export { authorSchema, publishersSchema, artistsSchema }
export type { authorsType, publishersType, artistsType }
