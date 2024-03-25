import { z } from 'zod'

export const authorSchema = z.array(
    z.object({
        name: z.string(),
        location: z.string(),
        description: z.string(),
    })
)
