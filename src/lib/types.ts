import { z } from 'zod'

const authorSchema = z.object({
    name: z.string(),
    location: z.string(),
    description: z.string(),
})
