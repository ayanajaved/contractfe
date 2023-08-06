import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                <NavLink className="LogoLink" to="/Contract" activeStyle>
                        <img src="logo_transparent.png"></img>
                    </NavLink>
                    <NavLink className="Contract" to="/Contract" activeStyle>
                        Home
                    </NavLink>
                    <NavLink className="Contact" to="/Contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink className="About" to="/About" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;