import { $authHost, $host } from "./index"

export const create = async (device: any) => {
    const response = $authHost.post('api/device', device)
    return response
}

export const getDevices = async (limit: number, page: number) => {
    const response = $host.get(`api/device?limit=${limit}&page=${page}`)
    return response
}

export const getDevice = async (id: number) => {
    const response = $host.get(`api/device/${id}`)
    return response
}