import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav``;


const NavList = styled.ul`
    list-style: none;
`;

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-weight: 500;
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 0.2s ease;
    font-size: calc(3px + 1vw);

    &:hover {
      background: white;
      color: #0033a0;
    }
`;

export function Nav() {
    return (
        <Navigation>
                <NavList><NavLink to="/">Home</NavLink></NavList>
                <NavList><NavLink to="/about">About</NavLink></NavList>
        </Navigation>
    )
}