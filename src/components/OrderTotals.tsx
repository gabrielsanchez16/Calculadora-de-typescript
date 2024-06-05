import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"


type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const propina = useMemo(() => subTotal * tip, [order, tip])
    const total = useMemo(() => subTotal + propina, [order, tip])


    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina:</h2>
                <p>Subtotal a pagar:{" "}
                    <span className="font-bold">{formatCurrency(subTotal)}</span>
                </p>

                <p>Propina:{" "}
                    <span className="font-bold">{formatCurrency(propina)}</span>
                </p>

                <p>Total a pagar:{" "}
                    <span className="font-bold">{formatCurrency(total)}</span>
                </p>
            </div>
            <button
                className="bg-black mt-10 w-full text-white disabled:opacity-10 p-3 font-bold"
                disabled={total === 0}
                onClick={placeOrder}
            >Guardar Orden</button>
        </>
    )
}

export default OrderTotals