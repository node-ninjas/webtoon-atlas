import { z } from 'zod'

const ProfileSchema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
})

const authorSchema = z.array(ProfileSchema)

const publisherSchema = z.array(
    z.object({
        ProfileSchema,
        type: z.array(z.string()),
    })
)

type authorsType = z.infer<typeof authorSchema>
type publisherType = z.infer<typeof publisherSchema>

export { authorSchema, publisherSchema }
export type { authorsType, publisherType }
