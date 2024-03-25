import { useAppContext } from '@/lib/contexts/WebToonContext'

export const PageHome = () => {
    const { authors, publishers, artists } = useAppContext()
    return (
        <section>
            {authors.map((author) => (
                <ul key={author.name}>
                    <li>Name: {author.name}</li>
                    <li>Location: {author.location}</li>
                    <li>Description: {author.description}</li>
                </ul>
            ))}
            {publishers.map((publisher) => (
                <ul key={publisher.name}>
                    <li>Name: {publisher.name}</li>
                    <li>Location: {publisher.location}</li>
                    <li>Description: {publisher.description}</li>
                </ul>
            ))}
            {artists.map((artist) => (
                <ul key={artist.name}>
                    <li>Name: {artist.name}</li>
                    <li>Location: {artist.location}</li>
                    <li>Description: {artist.description}</li>
                </ul>
            ))}
        </section>
    )
}
