import { z } from 'zod'

const ProfileSchema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
})

const authorSchema = z.array(ProfileSchema)

const publishersSchema = z.array(
    z.object({
        ProfileSchema,
        type: z.array(z.string()),
    })
)

type authorsType = z.infer<typeof authorSchema>
type publishersType = z.infer<typeof publishersSchema>

export { authorSchema, publishersSchema }
export type { authorsType, publishersType }
