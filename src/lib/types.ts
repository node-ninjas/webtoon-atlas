import { z } from 'zod'

const authorSchema = z.array(
    z.object({
        name: z.string(),
        location: z.string(),
        description: z.string(),
    })
)

type authorsType = z.infer<typeof authorSchema>

export { authorSchema }
export type { authorsType }
