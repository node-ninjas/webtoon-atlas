import { z } from 'zod'

const profileSchema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
})

const authorSchema = z.array(profileSchema)

const publishersSchema = z.array(
    profileSchema.extend({
        type: z.array(z.string()),
    })
)

type authorsType = z.infer<typeof authorSchema>
type publishersType = z.infer<typeof publishersSchema>

export { authorSchema, publishersSchema }
export type { authorsType, publishersType }
