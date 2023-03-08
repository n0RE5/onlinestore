import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/ErrorPage.scss"

const ErrorPage: React.FC = () => {
    return (
        <div className='e_404'>
            <div className='e_404_title'>404</div>
            <div className='e_404_pagenotfound'>OOPS! Page not found</div>
            <div className='e_404_description'>Sorry but the page you are looking for does not exists</div>
            <Link to='/' className='e_404_link'>Back to homepage</Link>
        </div>
    );
};

export default ErrorPage;