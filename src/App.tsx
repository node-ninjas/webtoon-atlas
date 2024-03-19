import { Outlet } from 'react-router-dom'
import { Header } from './components/custom/Header'
import { ThemeProvider } from './components/ui/theme-provider'
import { WebtoonProvider } from './lib/contexts/WebToonContext'

function App() {
    return (
        <>
            <WebtoonProvider>
                <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                    <Header />
                    <main className="m-5">
                        <Outlet />
                    </main>
                </ThemeProvider>
            </WebtoonProvider>
        </>
    )
}

export default App
