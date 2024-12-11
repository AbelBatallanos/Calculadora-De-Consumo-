import {useMemo, useState, useEffect} from "react"
import {MenuItems, TypeConsumidos} from "../types/index"
import {menuItems} from "../data/db"
export const userConsumo = ()=>{
    
    const GetLS = () =>{
        const Getls = localStorage.getItem("Consumo");
        return Getls? JSON.parse(Getls) : [];
    }
    const [DB] = useState(menuItems)
    const [showConsumo ,setShowconsumo] = useState(false);
    const [ConsumoMenu, setConsumoMenu] = useState<TypeConsumidos[]>(GetLS); //Esto se llama Generix los que estan en medio de las flechas

    const totalprice = useMemo( () =>ConsumoMenu.reduce( (init, itera)=> init + (itera.price * itera.cantidad), 0) , [ConsumoMenu])
    
    const [propina, setpropina] = useState(0)  


    useEffect( () => {
        localStorage.setItem("Consumo", JSON.stringify(ConsumoMenu))
        console.log(ConsumoMenu)
    },[showConsumo, ConsumoMenu])

    function ShowConsumo(MenuItems: MenuItems){
        setShowconsumo(true)
        const test = ConsumoMenu.findIndex( (value)=> value.id === MenuItems.id );
        const save_copy = [...ConsumoMenu];
        if(test < 0){
            const newItem : TypeConsumidos = {...MenuItems, cantidad: 1}
            setConsumoMenu([...ConsumoMenu, newItem])  
            return
        }
        
        save_copy[test].cantidad++;
        console.log("Se Consumio: "+ " " + MenuItems.name + MenuItems.price)
        setConsumoMenu(save_copy)
       
    }

    
    function Propinas(prn : number){
        const monto_propina : number = Math.floor((prn / 100) * totalprice)
        setpropina(monto_propina)
    }

    function Delete_consumo(date : TypeConsumidos) {
        console.log(date)
        const value_total = ConsumoMenu.filter( v => v.id !== date.id)
        console.log(value_total)

        setConsumoMenu(value_total)
    }




    return{db: DB, ShowConsumo, showConsumo, ConsumoMenu, totalprice, Propinas, propina, Delete_consumo,  }
}