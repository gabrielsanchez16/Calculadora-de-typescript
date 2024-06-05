import { MenuItems } from "../types"

type MenuItemProps = {
    item:MenuItems,
    addItems: (item:MenuItems) => void
}

const MenuItems = ({item,addItems} : MenuItemProps) => {
    
  return (
    <button 
    className="border-2 rounded-md border-blue-700 w-full p-3 flex items-center justify-between hover:bg-blue-200"
    onClick={()=>{addItems(item)}}
    >
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
    </button>
  )
}

export default MenuItems