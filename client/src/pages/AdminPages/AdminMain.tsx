import React from 'react';
import { Link } from 'react-router-dom';

const AdminMain: React.FC = () => {
    return (
        <div className="admin_main_w">
            <div className="admin_main_title">Admin Panel</div>
            <hr className="admin_main_hr"/>
            <div className="admin_main_panel">
                <Link to={`/admin/?page=devicemgr`} className="main_panel_box">Device Manager</Link>
                <Link to={`/admin/?page=brandtypemgr`} className="main_panel_box">Brand & Type Manager</Link>
            </div>
        </div>
    );
};

export default AdminMain;