import { useAppContext } from '@/lib/contexts/WebToonContext'

export const PageHome = () => {
    const { authors } = useAppContext()
    return (
        <section>
            {authors.map((author) => (
                <ul key={author.name}>
                    <li>Name: {author.name}</li>
                    <li>Location: {author.location}</li>
                    <li>Description: {author.description}</li>
                </ul>
            ))}
        </section>
    )
}
