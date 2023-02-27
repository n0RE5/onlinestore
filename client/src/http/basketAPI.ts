import { $authHost, $host } from "./index"

export const fillBasket = async (basketId: number, deviceId: number) => {
    const response = $authHost.post('api/basket', {basketId, deviceId})
    return response
}

export const getBasket = async (basketId: number) => {
    const response = $authHost.get(`api/basket/${basketId}`)
    return response
}

export const removeBasketItem = async (basketId: number, deviceId: number) => {
    const response = $authHost.post('api/basket/remove', {basketId, deviceId})
    return response
}