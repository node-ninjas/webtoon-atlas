export type authorsType = {
    name: string
    location: string
    description: string
}
// * single title object within the title array
type webtoonTitle = {
    name: string
    language: string
}

// * type for the title array
type webtoonTitles = webtoonTitle[]

// * type for authors, artists, publisher that all use the same subSchema
type Profile = {
    name: string
    location: string
    description?: string
}

type Publisher = [{ type: string[] } & Profile]

export type singleWebtoonType = {
    title: webtoonTitles
}
