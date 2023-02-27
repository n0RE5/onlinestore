import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBasket, removeBasketItem } from '../../http/basketAPI';
import { IDevice, IUser } from '../../types/Interfaces';
import { deviceLoading } from '../../utils/placeholder';

const ProfileBasket: React.FC = () => {

    const user: IUser = useSelector((state: any) => state.userState.user)
    const [device, setDevice] = useState<IDevice>(deviceLoading)

    const getUserBasket = async () => {
        try {
            const response = await getBasket(user.basketId)
            setDevice(response.data.rows[0].device)
        } catch (e) {
            console.log(e);
        }
    }

    const rmBasketItem = async (deviceId: number) => {
        try {
            const response = await removeBasketItem(user.basketId, deviceId)
            getUserBasket()
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {getUserBasket()}, [])
    return (
        <div className="basket_w">
            <div className="main_title">Your Basket</div>
            <hr className="main_hr"/>
            <h1>{device?.id}</h1>
            <hr className="main_hr"/>
        </div>
    );
};

export default ProfileBasket;