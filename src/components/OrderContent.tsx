import { formatCurrency } from "../helpers"
import type { MenuItems, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[],
    removeItem: (id:MenuItems["id"])=>void
}

const OrderContent = ({ order,removeItem }: OrderContentProps) => {
    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>
            <div className="space-y-3 mt-10">
                {
                   
                        order.map(item => {
                            return (
                                <div className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b" key={item.id}>
                                    <div>
                                        <p className="text-lg">{item.name} -  {formatCurrency(item.price)}</p>
                                        <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}</p>
                                    </div>
                                    <button onClick={()=>removeItem(item.id)} className="bg-red-600 text-white rounded-full h-8 w-8 hover:bg-red-900">
                                        X
                                    </button>
                                </div>
                            )
                        })
                }
            </div>

        </div>
    )
}

export default OrderContent