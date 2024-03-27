import { z } from 'zod'
import {
    statusArray,
    typeArray,
    priceValueRegex,
    currencySymbolArray,
    languageArray,
    isbnRegex,
} from '@/lib/variables'

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

const titleSchema = z.object({
    name: z.string(),
    language: z.string(z.enum(languageArray)),
})

const priceSchema = z.object({
    value: z.string().regex(priceValueRegex),
    currency: z.string(z.enum(currencySymbolArray)),
})

const positiveNumberSchema = z.number().positive()

const sizeSchema = z.object({
    length: positiveNumberSchema,
    height: positiveNumberSchema,
    width: positiveNumberSchema,
})

const webtoonSchema = z.object({
    titles: z.array(titleSchema),
    authors: authorSchema,
    artists: artistsSchema,
    publishers: publishersSchema,
    status: z.string(z.enum(statusArray)),
    chapters: z.number().max(1000),
    type: z.string(z.enum(typeArray)),
    genres: z.array(z.string()),
    volume: z.number(),
    price: z.array(priceSchema),
    pages: z.number(),
    size: sizeSchema,
    isbn: z.string().regex(isbnRegex),
    translator: z.string(),
    description: z
        .string()
        .max(80, 'The Description cannot be longer than 80 characters'),
    ageRecommendation: z.number().nonnegative().min(0).max(20),
})

const webtoonsSchema = z.array(webtoonSchema)

type authorsType = z.infer<typeof authorSchema>
type publishersType = z.infer<typeof publishersSchema>
type artistsType = z.infer<typeof artistsSchema>
type webtoonType = z.infer<typeof webtoonSchema>
type webtoonsType = z.infer<typeof webtoonsSchema>

export { authorSchema, publishersSchema, artistsSchema, webtoonsSchema }
export type {
    authorsType,
    publishersType,
    artistsType,
    webtoonType,
    webtoonsType,
}
