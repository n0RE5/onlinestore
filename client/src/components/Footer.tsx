import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles/Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <div className={classes.footer_w}>
            <div className={classes.footer_top}>
                <div className={classes.footer_module}>
                    <div className={classes.footer_module_name}>INFORMATION</div>
                    <ul className={classes.footer_module_list}>
                        <li><Link to="/profile">My account</Link></li>
                        <li><Link to="/profile?page=basket">Basket</Link></li>
                        <li><Link to="/profile?page=settings">Settings</Link></li>
                    </ul>
                </div>
                <div className={classes.footer_module}>
                    <div className={classes.footer_module_name}>OUR OFFERS</div>
                    <ul className={classes.footer_module_list}>
                        <li><Link to="/?category=laptop">Laptops</Link></li>
                        <li><Link to="/?category=smartphone">Smartphones</Link></li>
                        <li><Link to="/?category=laptop">Tablets</Link></li>
                        <li><Link to="/?category=camera">Cameras</Link></li>
                        <li><Link to="/?category=headphones">Headphones</Link></li>
                    </ul>
                </div>
                <div className={classes.footer_module}>
                    <div className={classes.footer_module_name}>OUR POLICY</div>
                    <ul className={classes.footer_module_list}>
                        <li><a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>Help & Contact</a></li>
                        <li><Link to="">Return Policy</Link></li>
                        <li><Link to="">Terms of use</Link></li>
                    </ul>
                </div>
            </div>
            <div className={classes.footer_btm}>
                <div>Copyright &copy; 2023 SHOP. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;