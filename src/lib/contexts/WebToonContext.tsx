import { createContext, useContext, useEffect, useState } from 'react'
import { fetchSingleEndpoint } from '../utils'
import {
    authorSchema,
    authorsType,
    publishersSchema,
    publishersType,
    artistsSchema,
    artistsType,
} from '../types'

type webtoonTypes = {
    authors: authorsType
    publishers: publishersType
    setAuthors: React.Dispatch<React.SetStateAction<authorsType>>
    setPublishers: React.Dispatch<React.SetStateAction<publishersType>>
    artists: artistsType
    setArtists: React.Dispatch<React.SetStateAction<artistsType>>
}

export const contextData: webtoonTypes = {
    authors: [],
    setAuthors: () => {},
    publishers: [],
    setPublishers: () => {},
    artists: [],
    setArtists: () => {},
}

type ProviderProps = {
    children: React.ReactNode
}

export const WebtoonContext = createContext<webtoonTypes>(contextData)

export const WebtoonProvider: React.FC<ProviderProps> = ({ children }) => {
    const [authors, setAuthors] = useState<authorsType>([])
    const [publishers, setPublishers] = useState<publishersType>([])
    const [artists, setArtists] = useState<artistsType>([])

    useEffect(() => {
        fetchSingleEndpoint('authors', authorSchema).then((data) =>
            setAuthors(data)
        )
        fetchSingleEndpoint('publishers', publishersSchema).then((data) =>
            setPublishers(data)
        )
        fetchSingleEndpoint('artists', artistsSchema).then((data) =>
            setArtists(data)
        )
    }, [])

    const contextValue: webtoonTypes = {
        authors,
        setAuthors,
        publishers,
        setPublishers,
        artists,
        setArtists,
    }

    return (
        <WebtoonContext.Provider value={contextValue}>
            {children}
        </WebtoonContext.Provider>
    )
}
export const useAppContext = () => {
    const context = useContext(WebtoonContext)
    if (!context) {
        throw new Error('useAppContext must be used within an Context Provider')
    }
    return context
}
