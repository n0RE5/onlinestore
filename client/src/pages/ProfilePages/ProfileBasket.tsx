import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getBasket, removeBasketItem } from '../../http/basketAPI';
import { IDevice, IRootReducer, IUser } from '../../types/Interfaces';

const ProfileBasket: React.FC = () => {
    const user = useSelector<IRootReducer, IUser>(state => state.userState.user)
    const [basketList, setBasketList] = useState<IDevice[]>([])

    const getUserBasket = async () => {
        try {
            const response = await getBasket(user.basketId)
            setBasketList(response.data.rows.map((item: any) => item.device))
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

    const buy = async () => {
        try {
            basketList.forEach(device => rmBasketItem(device.id))
            alert("Sucessful!")
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {getUserBasket()}, [])
    return (
        <div className="basket_w">
            <div className="main_title">Your Basket</div>
            <hr className="main_hr"/>
            <table className='basket_table'>
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th className='basket_rm'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {basketList.length
                    ? basketList.map(device => 
                        <tr key={device.id}>
                            <td className='basket_img'><img src={process.env.REACT_APP_API_URL + device.img} alt="device_img" width="20px" height="20px" /></td>
                            <td className='basket_item'>{device.name}</td>
                            <td className='basket_price'>{device.price}$</td>
                            <td className='basket_amount'>1</td>
                            <td className='basket_rm'><a onClick={() => rmBasketItem(device.id)}><span></span></a></td>
                        </tr>
                    )
                    : <div className='basket_empty'>Basket is empty...</div> 
                    }
                    </tbody>
            </table>
            <hr className="main_hr"/>
            <button onClick={buy} className='basket_buy'>Buy</button>
        </div>
    );
};

export default ProfileBasket;