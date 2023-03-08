import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootReducer } from '../types/Interfaces';
import classes from './styles/Navbar.module.scss'

const Navbar: React.FC = () => {
    const isAuth = useSelector<IRootReducer, boolean>(state => state.userState.isAuth)

    return (
        <div className={classes.navbar}>
            <div className="contain">
                <div className={classes.navbar_w}>
                    <div className={classes.navbar_title}>
                        <div className={classes.navbar_fakeburger}>
                            <span />
                            <span />
                            <span />
                        </div>
                        <Link to='/' className={classes.navbar_logo}>SHOP</Link>
                    </div>
                    <ul className={classes.navbar_ul}>
                        <span><a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>Contact</a></span>
                        <span><Link to={`/profile?page=settings`}>Settings</Link></span>
                        {isAuth
                            ? <span><Link to={`/profile`}>Profile</Link></span>
                            : <span><Link to={`/login`}>Login</Link></span>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;