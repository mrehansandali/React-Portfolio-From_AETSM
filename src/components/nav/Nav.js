import React from 'react'
import "./Nav.css"
import { ImDroplet } from 'react-icons/im';
import { TbSquareNumber5 } from 'react-icons/tb';
import { FaSearch } from "react-icons/fa";
import user from "../img/user.jpg"


function Nav() {
    return (
        <div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container mrcontainer">
                    <div className="mrlogo">
                        <a className="navbar-brand" href="#"><h1><ImDroplet /></h1></a>
                        <h2>Kodecolor</h2>
                    </div>
                    <button className="navbar-toggler mrNR" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mrTI" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">


                        <form className="d-flex mrform mx-auto" role="search">
                            <div className="search-input">
                                <button type="submit" className="mrsearchbtn">
                                    <FaSearch />
                                </button>
                                <input className="mrsearchField" type="text" placeholder="Search" />
                            </div>
                        </form>


                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 mrul">
                            <li className="nav-item mx-2">
                                <a className="nav-link active mrLI" aria-current="page" href="#">Find People</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active mrLI mrmsg" href="#">Messages <span><TbSquareNumber5 /></span>
                                </a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active mrLI">My Contacts</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link active mrLI mruser"><img src={user} alt="" /></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



        </div>
    )
}

export default Nav