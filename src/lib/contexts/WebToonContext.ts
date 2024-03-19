import { createContext, useState } from 'react'

type authorsType = {
  name: string,
  location: string,
  description: string
}

type webtoonTypes = {
 authors: authorsType[]
setAuthors: React.Dispatch<React.SetStateAction<authorsType[]>>
}


export const contextData: webtoonTypes =  {
    authors: [],
    setAuthors: () => {} 
}




type ProviderProps = {
        children: React.ReactNode;
}

export const WebtoonContext = createContext<webtoonTypes>(contextData)

export const WebtoonProvider: React.FC<ProviderProps> = ({ children }) => {
    const [authors, setAuthors] = useState<authorsType[]>([]); 

    const contextValue: webtoonTypes = {
        authors,
        setAuthors,
    }

    return (
        <WebtoonContext.Provider value={contextValue}>
             {children}
        </WebtoonContext.Provider>
    );
}