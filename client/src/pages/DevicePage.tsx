import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IDevice, IUser } from '../types/Interfaces';
import '../styles/DevicePage.scss'
import { useSelector } from 'react-redux';
import Searchbar from '../components/Searchbar';
import { getDevice } from '../http/deviceAPI';
import { useFetching } from '../components/hooks/useFetching';
import { fillBasket } from '../http/basketAPI';
import { deviceLoading } from '../utils/placeholder';

function DevicePage() {

    const navigate = useNavigate()
    const isAuth: boolean = useSelector((state: any) => state.userState.isAuth)
    const user: IUser = useSelector((state: any) => state.userState.user)
    const [device, setDevice] = useState<IDevice>(deviceLoading)

    const {id} = useParams()

    const [fetchDevice] = useFetching(async () => {
        const searchedDevice = await getDevice(Number(id))

        if(searchedDevice.data === null) return
        
        return setDevice(searchedDevice.data)
    })

    const addToBasket = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()

            if(!isAuth) {
                return navigate('/login')
            }

            const response = await fillBasket(user.basketId, Number(id))
            console.log(response);
            
        } catch (error: any) {
            alert(error.response?.data?.message);
            
        }
    }

    useEffect(() => {
        fetchDevice()
    }, []);

    return (
        <div className="device_w">
            <Searchbar />
            <div className="device_content_w">
                <div className="device_image">
                    <img src={process.env.REACT_APP_API_URL + device.img} alt="" />
                </div>
                <div className="device_media">
                    <div className="device_title">{device?.name}</div>
                    <div className="device_tag">{device?.tag}</div>
                    <div className="device_price">${device?.price}</div>
                    <div className="device_info">
                        <div className="device_info_name">Description</div>
                        <div className="device_info_description">Content</div>
                        <hr />
                    </div>
                    <button onClick={addToBasket} className="device_add"><span className="device_add__img"></span>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default DevicePage;