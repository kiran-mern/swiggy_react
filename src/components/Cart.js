import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { removeItem } from "../redux/cartSlice"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()

    const handleRemoveCart=()=>{
        dispatch(removeItem())
    }

    return(
        <div className="text-center m-6 p-6">
            <h1 className="font-bold text-2xl">
                Cart
            </h1>

            <button className="p-2 m-2 bg-gray-300 rounded-md "
            onClick={handleRemoveCart}
            >Clear</button>

            {cartItems.length===0 && 
            <h1>
                Cart is currently empty.Please add items.
            </h1>
            }
            <ItemList items={cartItems} />

        </div>
    )
}
export default Cart