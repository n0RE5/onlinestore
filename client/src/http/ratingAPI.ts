import { $authHost, $host } from "./index";

export const rateDevice = async (rate: number, userId: number, deviceId: number) => {
    const response = $authHost.post(`api/rating`, {rate, userId, deviceId})
    return response
}

export const updateDeviceRating = async (deviceId: number) => {
    const response = $host.get(`/api/rating/${deviceId}`)
    return response
}