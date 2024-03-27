import { useAppContext } from '@/lib/contexts/WebToonContext'

export const Webtoons = () => {
    const { webtoons } = useAppContext()

    return (
        <>
            {webtoons.map((webtoon) => (
                <ul key={webtoon.isbn}>
                    <li>
                        {webtoon.titles.map((title, index) => {
                            return (
                                <ul key={index}>
                                    <li>Title: {title.name}</li>
                                </ul>
                            )
                        })}
                    </li>
                    {webtoon.authors.map((author, index) => {
                        return (
                            <ul key={index}>
                                <li>Author: {author.name}</li>
                                <li>Location: {author.location}</li>
                                {author.description === '' ? (
                                    <li>No Description available</li>
                                ) : (
                                    <li>Description: {author.description}</li>
                                )}
                            </ul>
                        )
                    })}
                </ul>
            ))}
        </>
    )
}
