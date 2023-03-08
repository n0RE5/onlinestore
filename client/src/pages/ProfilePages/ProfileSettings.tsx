import React from 'react';
import { useSelector } from 'react-redux';
import { IRootReducer, IUser } from '../../types/Interfaces';

const ProfileSettings: React.FC = () => {
    const user = useSelector<IRootReducer, IUser>(state => state.userState.user)

    return (
        <div className="main_w">
            <div className="main_title">Settings</div>
            <hr className="main_hr"/>
            <div className='profile_settings'>
                <div className='profile_left'>Login</div>
                <div className='profile_right'>{user.email}</div>
            </div>
            <div className='profile_settings'>
                <div className='profile_left'>Password</div>
                <div className='profile_right'>*********</div>
            </div>
        </div>
    );
};

export default ProfileSettings;