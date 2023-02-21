import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDevice } from '../types/Interfaces';
import classes from './styles/Device.module.scss'

interface DeviceProps {
    deviceItem: IDevice
}

const Device: React.FC<DeviceProps> = ({deviceItem}) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/device/${deviceItem.id}`)} className={classes.device}>
            <div className={classes.device_img}>
                <img src={process.env.REACT_APP_API_URL + deviceItem.img} alt="" />
            </div>
            <div className={classes.device_title}>{deviceItem?.name}</div>
            <div className={classes.device_tag}>{deviceItem?.tag}</div>
            <div className={classes.rate}>
                <div className={classes.star_active}/>
                <div className={classes.star_active}/>
                <div className={classes.star_active}/>
                <div className={classes.star_active}/>
                <div className={classes.star_active}/>
            </div>
            <hr className={classes.device_hr} />
            <div className={classes.device_price}>{deviceItem?.price}$ <span className={classes.basket}></span></div>
        </div>
    );
};

export default Device;