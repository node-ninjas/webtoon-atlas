import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <NavLink to="/" className="m-3">Home</NavLink>
            <NavLink to="/info" className="m-3">Info</NavLink>
        </nav>
    )
}