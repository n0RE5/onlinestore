import { $authHost, $host } from "./index"

export const createType = async (name: string) => {
    const response = $authHost.post('api/type', {name})
    return response
}

export const getAllTypes = async () => {
    const response = $host.get(`api/type`)
    return response
}

export const getType = async (id: number) => {
    const response = $host.get(`api/type/${id}`)
    return response
}

