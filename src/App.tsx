import { Outlet } from 'react-router-dom'
import { Header } from './components/custom/Header'
import { ThemeProvider } from './components/ui/theme-provider'
import { ClerkLogin } from './components/custom/ClerkLogin'

function App() {
    return (
        <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Header>
                    <ClerkLogin />{' '}
                </Header>
                <main className="m-5">
                    <Outlet />
                </main>
            </ThemeProvider>
        </>
    )
}

export default App
