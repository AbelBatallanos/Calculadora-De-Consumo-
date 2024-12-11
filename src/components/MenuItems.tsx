import { MenuItems as MnItems } from "../types"

interface MenuInterface {
  item: MnItems,
  ShowConsumo: (MenuItems: MnItems) => void

}


export default function MenuItems({item, ShowConsumo} : MenuInterface) {
  // console.log(name, price)
  return (
      <div>
        <p className="py-2 px-4 w-auto border-green-500 border-y-2 hover:bg-green-700 hover:text-white hover:border-green-700 active:bg-green-600
        flex justify-between font-semibold " onClick={() => {ShowConsumo(item)}}>{item.name} 
        <span className="text-lg hover:font-bold">{item.price}
        </span> </p>
      </div>
  )
}
