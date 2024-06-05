import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"

const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItems = (item: MenuItems) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if (itemExist) {
            const updatedOrder = order.map(orderItem=> orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(updatedOrder)

        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const removeItem = (id:MenuItems["id"])=>{
        const newOrder = order.filter(item=> item.id !== id )
        setOrder(newOrder)
    }

    const placeOrder = ()=>{
            setOrder([])
            setTip(0)
    }

    return {
        addItems,
        order,
        tip,
        setTip,
        removeItem,
        placeOrder
    }
}

export default useOrder