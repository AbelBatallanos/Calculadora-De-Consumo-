
export type MenuItems = {
    id : number,
    name: string,
    price: number
}

export type TypeConsumidos =  MenuItems & {
    cantidad: number
} 
