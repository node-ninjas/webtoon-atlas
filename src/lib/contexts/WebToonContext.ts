import { createContext, useContext } from 'react'

type webtoonTypes = {


}


const webtoonContext: webtoonTypes =  {



}


const createWebtoonContext = createContext(webtoonContext)

type providerProps = {
    children: React.ReactNode
}

const WebtoonProvider = ({children}: providerProps) => {



return (
    <createWebtoonContext.Provider value={contextValue}>
    {children}
    </createWebtoonContext.Provider>
    )

}