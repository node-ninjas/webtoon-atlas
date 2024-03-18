import { Outlet } from 'react-router-dom'
import { Header } from './components/custom/Header'
import { ThemeProvider } from './components/ui/theme-provider'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header> </Header>
                <main className="m-5">
                    <Outlet />
                </main>
            </ThemeProvider>
        </>
    )
}

export default App
