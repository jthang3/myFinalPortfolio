import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
    let [open, setOpen] = useState(false);

    const openMenu = () => {
        let addClass = document.querySelector(".menu-btn");
        let getNav = document.querySelector(".nav-bar");
        let getMenu = document.querySelector(".menu--options__close");
        if(open === false) {
            addClass.classList.add("open");
            getNav.classList.add("nav-bar__width");
            getMenu.classList.add("menu--options__open");
            setOpen(true);
        }
        else {
            addClass.classList.remove("open");
            getNav.classList.remove("nav-bar__width");
            getMenu.classList.remove("menu--options__open");
            setOpen(false);
        }
    }
    return(
        <div>
            <div className="menu-btn" onClick={openMenu}>
                <div className="menu-btn__burger">        
                </div>
            </div>
            <div className="menu--option">
                <ul className="menu--options__close">
                    <li><Link to = "/home">Home</Link></li>
                    <li><Link to = "/about">About Me</Link></li>
                    <li><Link to = "/skills">Skills</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;