import { IDevice, IDevice_Info } from "../types/Interfaces"

const info: IDevice_Info = {
    title: "123",
    description: "123",
    redirect_url: "/"
  }
export const deviceItems: IDevice[] = [
  {
    id: 1,
    name: "123",
    price: 1234,
    img: "123",
    rating: 0,
    brand: "123",
    tag: "123",
    type: "123",
    info: [info]
  },
  {
    id: 2,
    name: "1234",
    price: 9999,
    img: "123",
    rating: 5,
    brand: "123",
    tag: "123",
    type: "123",
    info: [info]
  },
  {
    id: 3,
    name: "12345",
    price: 15,
    img: "123",
    rating: 9,
    brand: "123",
    tag: "123",
    type: "123",
    info: [info]
  }
]