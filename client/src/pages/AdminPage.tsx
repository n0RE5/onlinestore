import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useSearchQuery } from '../hooks/useSearchQuery';
import { IRootReducer, IUser } from '../types/Interfaces';
import '../styles/AdminPage.scss'
import AdminMain from './AdminPages/AdminMain';
import AdminBrandTypeManager from './AdminPages/AdminBrandTypeManager';
import AdminDeviceManager from './AdminPages/AdminDeviceManager';

function AdminPage() {
    const navigate = useNavigate()
    const [params] = useSearchQuery()
    const page = params.get("page") || ""
    const user = useSelector<IRootReducer, IUser>(state => state.userState.user)
    const [renderedComponent, setRenderedComponent] = useState<React.ReactNode | JSX.Element>(<div/>)
    
    const renderComponent = () => {
        switch (page) {
            case "main":
                setRenderedComponent(<AdminMain/>)
                break;
            case "devicemgr":
                setRenderedComponent(<AdminDeviceManager/>)
                break;
            case "brandtypemgr":
                setRenderedComponent(<AdminBrandTypeManager/>)
                break;
            case "":
                setRenderedComponent(<AdminMain/>)
                break;
            default:
                navigate('/error')
                break;
        }
    }

    useEffect(() => renderComponent(), [page])

    return (
        <div className="admin">
            <div className="admin_w">
                <div className="admin_sidebar">
                    <div className="admin_title">Admin Panel</div>
                    <hr className="admin_hr"/>
                    <Link to={`/admin/?page=main`} className="admin_switch">Main</Link>
                    <Link to={`/admin/?page=devicemgr`} className="admin_switch">Device Manager</Link>
                    <Link to={`/admin/?page=brandtypemgr`} className="admin_switch">Brand & Type Manager</Link>
                </div>
                <div className="admin_body">
                    {renderedComponent}
                </div>
            </div>
        </div>
    );
};

export default AdminPage;