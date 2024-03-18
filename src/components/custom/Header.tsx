import { Nav } from './Nav'
import { ModeToggle } from '../ui/mode-toggle'
import { ClerkLogin } from './ClerkLogin'

type props = {
    children: React.ReactNode
}

export const Header = ({ children }: props) => {
    return (
        <>
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl">Webtoon-Atlas</h1>
                {children}
                <ClerkLogin />
                <ModeToggle />
            </div>
            <Nav />
        </>
    )
}
