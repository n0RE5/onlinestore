export interface IRootReducer {
    userState: {
        user: IUser,
        isAuth: boolean
    },
    globalList: {
        deviceList: IDevice[]
    }
}

export interface IUser {
    id: number,
    email: string,
    role: string,
    basketId: number
}

export interface IDevice_Info {
    title: string,
    description: string,
    redirect_url: string
}

export interface IDevice {
    id: number,
    name: string, 
    price: number, 
    brand: string,
    img: string,
    rating: number,
    tag: string, 
    type: string,
    info: IDevice_Info[]
}