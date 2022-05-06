import React from 'react'
//import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

function Header() {
    const auth = useSelector(state => state.auth)

    const { user, isLogged } = auth


    const handleLogout = async () => {
        try {
            await axios.get('/user/logout')
            localStorage.removeItem('firstLogin')
            window.location.href = "/";
        } catch (err) {
            window.location.href = "/";
        }
    }

    const adminLink = () => {
        return (<>
            <li><Link to="/profile/MoviesInsert">Create Movie</Link></li>
            <li><Link to="/profile/MoviesList">Movies</Link></li></>

        )
    }

    const loggedRouter = () => {
        return (<>
            <li className="drop-nav">
                <div style={{ "display": "flex" }} className="">
                    <img src={user.avatar} alt="" className="navbar-avatar" />
                    <Link to="#" className="avatar nav-link">
                        <span>{user.name}</span>
                    </Link>
                    {/* <i className="fas fa-angle-down"></i> */}
                </div>

                <ul className="dropdown">
                    <li><Link to="/profile">Profile
                    </Link>
                    </li>

                    {
                        auth.user.role === 1 && adminLink()
                    }

                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </ul>


            </li></>)
    }


    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">


            <Link href to="/">
                <a className="navbar-brand">MovieTron</a>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">

                <ul className="navbar-nav p-1">
                    <li className="nav-item">
                        <Link to="/about"><a className="nav-link"> About Us </a>
                        </Link>

                    </li>

                    <li className="nav-item">
                        <Link to="/contact"><a className="nav-link"> Contact Us </a>
                        </Link>

                    </li>
                    <li className="nav-item">

                        {
                            isLogged ? loggedRouter() :
                                <Link to="/login"><a className="nav-link">Sign in </a>
                                </Link>
                        }
                    </li>


                </ul>
            </div>
        </nav>

    )
}

export default Header