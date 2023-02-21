import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { IDevice } from '../types/Interfaces';
import classes from './styles/Searchbar.module.scss'

const Searchbar: React.FC = () => {

    const globalList: IDevice[] = useSelector((state: any) => state.globalList.deviceList)
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState<string>("")

    const searchOrRedirect = (e: React.MouseEvent) => {
        e.preventDefault()
        
        const searchResult = [...globalList].filter(item => item.name.includes(searchQuery))

        if(searchResult.length === 1) {
            return navigate(`/device/${searchResult[0].id}`)
        }

        if(searchResult.length > 1) {
            return navigate(`/?searchQuery=${searchQuery}`)
        }

        return navigate('/error')
    }

    return (
            <div className={classes.searchbar_w}>
                <div className={classes.searchbar_categories}>
                    <div className={classes.searchbar_title}>Categories</div>
                    <ul className={classes.searchbar_ul}>
                        <Link to="/?category=laptops">Laptops</Link>
                        <Link to="/?category=cameras">Cameras</Link>
                        <Link to="/?category=accesories">Accesories</Link>
                    </ul>
                </div>
                <form className={classes.searchbar_form}>
                    <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={classes.searchbar_input} type="text" placeholder="Search" required />
                    <button onClick={(e) => searchOrRedirect(e)} className={classes.searchbar_search}/>
                </form>
            </div>
    );
};

export default Searchbar;