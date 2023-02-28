import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Devicelist from '../components/Devicelist';
import Searchbar from '../components/Searchbar';
import Sort from '../components/Sort';
import '../styles/MainPage.scss'
import { IDevice, IRootReducer } from '../types/Interfaces';

function MainPage() {
    
    const deviceList = useSelector<IRootReducer, IDevice[]>(state => state.globalList.deviceList)
    const [sortedList, setSortedList] = useState<IDevice[]>([...deviceList])

    return (
        <div className='mainpage'>
            <div className='mainpage__searchbar'>
                <Searchbar />
            </div>
            <div className='mainpage__content'>
                <Sort list={deviceList} setSortedList={setSortedList} />
                <Devicelist deviceList={sortedList}/>
            </div>
        </div>
    );
};

export default MainPage;