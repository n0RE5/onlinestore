import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IUser } from '../../types/Interfaces';

const ProfileMain: React.FC = () => {
    
    const user: IUser = useSelector((state: any) => state.userState.user)

    return (
        <div className="main_w">
            <div className="main_title">Your Profile</div>
            <hr className="main_hr"/>
            <div className="main_panel">
                <Link to={`/profile/?page=main`} className="main_panel_box">Profile</Link>
                <Link to={`/profile/?page=basket`} className="main_panel_box">Basket</Link>
                {user.role === "ADMIN" && <Link to={`/admin`} className="main_panel_box">Admin Panel</Link>}
            </div>
        </div>
    );
};

export default ProfileMain;