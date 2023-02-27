import { IDevice, IDevice_Info } from "../types/Interfaces"

const info: IDevice_Info = {
    title: "123",
    description: "123",
    redirect_url: "/"
  }
export const deviceLoading: IDevice = {
    id: 1,
    name: "Loading...", 
    price: 9999, 
    brand: "",
    img: "",
    rating: 10,
    tag: "", 
    type: "",
    info: [info]
}