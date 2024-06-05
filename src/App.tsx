import MenuItems from "./components/MenuItems"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const {addItems,order,removeItem,tip ,setTip,placeOrder} = useOrder()

  return (
    <>
      <header className="bg-blue-700 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="mb-4 font-bold text-4xl">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
            <MenuItems key={item.id} item={item} addItems={addItems} />
          ))}
          </div>
          
        </div>
        <div>
          {/* <h2 className="mb-4 font-bold text-4xl">Consumo</h2> */}
          <div className="border border-dashed border-blue-700 p-5 rounded-lg space-y-10 h-full">
            {
              order.length > 0 ? (
              <>
              <OrderContent  order={order} removeItem={removeItem}/>
              <TipPercentageForm setTip={setTip} tip={tip}/>
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder}/>
              </>
              )
              :(
                <p className="text-center font-bold">La orden esta vacia</p>
              )
            }
              
          </div>
        </div>
      </main>
    </>
  )
}

export default App
