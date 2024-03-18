import { Nav } from './Nav'
import { ModeToggle } from '../ui/mode-toggle'
import { ClerkLogin } from './ClerkLogin'

export const Header = () => {
    return (
        <>
            <div className="m-4 flex justify-between">
                <h1 className="text-2xl">Webtoon-Atlas</h1>
                <ClerkLogin />
                <ModeToggle />
            </div>
            <Nav />
        </>
    )
}
