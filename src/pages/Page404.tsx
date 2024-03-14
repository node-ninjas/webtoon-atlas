import { NavLink } from 'react-router-dom'

export const Page404 = () => {
    return (
        <>
            <h1>404 Not Found</h1>
            <NavLink to="/" className="underline">
                Return to this Link
            </NavLink>
        </>
    )
}
