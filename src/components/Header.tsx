import { Nav } from './Nav'
import { ModeToggle } from './ui/mode-toggle'

export const Header = () => {
    return (
        <>
            <div className="flex justify-between m-4">
                <h1 className="text-2xl">Webtoon-Atlas</h1>
                <ModeToggle />
            </div>
            <Nav />
        </>
    )
}
