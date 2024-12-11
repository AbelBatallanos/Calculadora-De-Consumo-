import MenuItems from "./components/MenuItems"
import Consumo from "./components/Consumo"
import {userConsumo} from "./hook/userConsumo"



function App() {

  const {db, ShowConsumo, showConsumo, ConsumoMenu, totalprice, Propinas, propina, Delete_consumo } = userConsumo()

  const validation_total_pagar = propina !== 0 ? propina : 0; 
  const total_pagar = validation_total_pagar + totalprice;
  // console.log(menuItems)
  // const ValideLS = useMemo( ()=> ConsumoMenu,length !== 0, [ConsumoMenu] );
  return (
    <>
      <header className="bg-green-400 py-6">
          <h1 className="text-center text-4xl font-bold text-slate-100">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="my-3 py-12 mx-auto max-w-7xl grid md:grid-cols-2 ">
        <div className="px-10 py-2 ml-3">
            <h2 className="text-center text-4xl font-extrabold">Menú</h2>
            <section className="my-2 space-y-4">
              {db.map(item => 
                <MenuItems
                  key={item.id}
                  item = {item}
                  ShowConsumo= {ShowConsumo} 
                />
              )}
            </section>
        </div>
        <section className="px-4 py-2 mx-3 border-2 border-gray-200 ">
              {showConsumo?
                <section className="">
                  <h2 className="text-center text-4xl font-extrabold">Consumo</h2>
                  <section className="mb-5 mt-8 space-y-1 h-64 flex flex-col overflow-x-hidden overflow-y-auto">
                  {ConsumoMenu.map( Consumido => 
                    <Consumo
                      key={Consumido.id}
                      Consumido = {Consumido}
                      ConsumoMenu = {ConsumoMenu}
                      Delete_consumo = {Delete_consumo}
                    />
                  )}
                  </section>
                  <section className="propinas ">
                    <h3 className="font-bold text-2xl">Propina:</h3>
                    <section className="conteiner-propinas my-3">

                      <section>
                        <label className="mr-3 font-medium  text-1xl">1%</label>
                        <input type="radio" name="descuento" onClick={()=> Propinas(1)}></input>
                      </section>

                      <section>
                        <label className="mr-3 font-medium text-1xl">3%</label>
                        <input type="radio" name="descuento" onClick={()=> Propinas(3)}></input>
                      </section>

                      <section>
                        <label className="mr-3 font-medium text-1xl">5%</label>
                        <input type="radio" name="descuento" onClick={()=> Propinas(5)}></input>
                      </section>
                    </section>

                  </section>

                  <section className="grid gap-3">

                    <h3 className="font-bold text-2xl ">Totales y Propinas:</h3>
                    <p className="font-semibold">Subtotal a pagar: <span className="font-bold">{totalprice}bs</span></p>
                    <p className="font-semibold">Propina: <span className="font-bold">{validation_total_pagar}bs</span></p>
                    <p className="font-semibold">Total a pagar: <span className="font-bold">{total_pagar}bs</span></p>

                  </section>

                  <button className="bg-gray-600 hover:bg-gray-800 hover:text-slate-50  w-full py-1 text-zinc-100 font-semibold my-6 rounded-full">GUARDAR ORDEN</button>
                </section>
               :
                <p className="text-center" >Aun no has agregado nada..!!</p>
              }
            {/* <h2 className="text-center text-4xl font-extrabold">Consumo</h2> */}
        </section>
      </main>

    </>
  )
}

export default App
