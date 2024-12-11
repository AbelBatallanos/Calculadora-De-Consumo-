import { useMemo } from "react"
import {TypeConsumidos} from "../types/index"
interface Descriptions {
    Consumido: TypeConsumidos,
    ConsumoMenu: TypeConsumidos,
    Delete_consumo: (data : TypeConsumidos) => void
}

export default function Consumo({Consumido, ConsumoMenu, Delete_consumo} : Descriptions){

    const {name, price, cantidad} = Consumido
    const Total_Costo_Producto = useMemo( () => price * cantidad, [ConsumoMenu])
    return (
        <section className="flex justify-around gap-3">
            <p className="font-semibold flex flex-col px-4 py-4 w-full hover:bg-gray-200 hover:rounded-3xl"> {`${name}  - $${price}`}
                <span className="">Cantidad: {`${cantidad}  --- Costo-Total: $${Total_Costo_Producto}`}</span>
                
            </p>
            <div className=" self-center mx-auto w-1/6 flex justify-center">    
                <button className="py-2 px-4 rounded-full bg-red-700 text-white hover:bg-red-900 " onClick={()=>Delete_consumo(Consumido)}>X</button>
            </div>
        </section>
    )
}