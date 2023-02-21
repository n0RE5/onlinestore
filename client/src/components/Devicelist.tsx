import React from 'react';
import { IDevice } from '../types/Interfaces';
import Device from './Device';
import classes from './styles/Devicelist.module.scss'

interface DevicelistProps {
    deviceList: IDevice[]
}

const Devicelist: React.FC<DevicelistProps> = ({deviceList}) => {
    return (
        <div className={classes.devicelist_w}>
            {deviceList.length
                ? deviceList.map(item => <Device key={item.name} deviceItem={item}/>) 
                : <span className={classes.not_found}>Nothing was found for your query :(</span>
            }
        </div>
    );
};

export default Devicelist;