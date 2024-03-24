import { createContext, useContext, useEffect, useState } from 'react'
import { fetchSingleEndpoint } from '../utils'

type webtoonTypes = {
    authors: authorsType[]
    setAuthors: React.Dispatch<React.SetStateAction<authorsType[]>>
}

export const contextData: webtoonTypes = {
    authors: [],
    setAuthors: () => {},
}

type ProviderProps = {
    children: React.ReactNode
}

export const WebtoonContext = createContext<webtoonTypes>(contextData)

export const WebtoonProvider: React.FC<ProviderProps> = ({ children }) => {
    const [authors, setAuthors] = useState<authorsType[]>([])
    const [webtoons, setWebtoons] = useState<webtoonsType[]>([])

    useEffect(() => {
        fetchSingleEndpoint('authors').then((data) => setAuthors(data))
        fetchSingleEndpoint('webtoons').then((data) => setWebtoons(data))
    }, [])

    const contextValue: webtoonTypes = {
        authors,
        setAuthors,
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
