import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../components/hooks/useSearchQuery';
import { setAuth, setUser } from '../store/userSlice';
import '../styles/ProfilePage.scss'
import { IUser } from '../types/Interfaces';
import ProfileBasket from './ProfilePages/ProfileBasket';
import ProfileMain from './ProfilePages/ProfileMain';
import ProfileSettings from './ProfilePages/ProfileSettings';

function ProfilePage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [params] = useSearchQuery()
    const page = params.get("page") || ""
    const user: IUser = useSelector((state: any) => state.userState.user)
    const [renderedComponent, setRenderedComponent] = useState<React.ReactNode | JSX.Element>(<div/>)
    
    const renderComponent = () => {
        switch (page) {
            case "main":
                setRenderedComponent(<ProfileMain/>)
                break;
            case "basket":
                setRenderedComponent(<ProfileBasket/>)
                break;
            case "settings":
                setRenderedComponent(<ProfileSettings/>)
                break;
            case "":
                setRenderedComponent(<ProfileMain/>)
                break;
            default:
                navigate('/error')
                break;
        }
    }

    const logout = () => {
        dispatch(setUser({}))
        dispatch(setAuth(false))
        localStorage.removeItem('token')
        navigate('/')
    }

    useEffect(() => renderComponent(), [page])

    return (
        <div className="profile">
            <div className="profile_w">
                <div className="profile_sidebar">
                    <span className="profile_circle"/>
                    <div className="profile_title">Your profile</div>
                    <div className="profile_email">{user.email}</div>
                    <hr className="profile_hr"/>
                    <Link to={`/profile/?page=main`} className="profile_switch">Main</Link>
                    <Link to={`/profile/?page=settings`} className="profile_switch">Settings</Link>
                    <Link to={`/profile/?page=basket`} className="profile_switch">Basket</Link>
                    <a onClick={() => logout()} className="profile_switch">Logout</a>
                </div>
                <div className="profile_body">
                    {renderedComponent}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;