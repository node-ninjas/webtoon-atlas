import { Nav } from './Nav'
import { ModeToggle } from './ui/mode-toggle'

export const Header = () => {
    return (
        <>
            <h1 className="text-2xl m-4">Webtoon-Atlas</h1>
            <Nav />
            <div className='flex justify-end m-4'>
                <ModeToggle />
            </div>
        </>
    )
}
