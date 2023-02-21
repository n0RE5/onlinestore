import { $authHost, $host } from "./index"

export const createBrand = async (name: string) => {
    const response = $authHost.post('api/brand', {name})
    return response
}

export const getAllBrands = async () => {
    const response = $host.get(`api/brand`)
    return response
}

export const getBrand = async (id: number) => {
    const response = $host.get(`api/brand/${id}`)
    return response
}

