import {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import UserContext from './UserContext';
const AppContext = ( {children} ) => {
    const location = useLocation();
    const [Products, setProducts] = useState()
    const [cardItem, setCartItem] = useState([]);
    const [cardCount,setCardCount]=useState(0)
    const [cardSubTotal,setCardSubTotal]=useState();
    useEffect(()=>{},[cardItem])
    const handleAddCard=(product,qauntity)=>{
        let items=[...cardItem];
        let index=items.findIndex(p=>p.id===product.id)
        if(index !==-1){
            items[index] +=qauntity 
        }else{
            items=[...items,product]
        }
        setCartItem(items)
    }
    const handleCardRemove=(product)=>{
        let items=[...cardItem];
        items=items.filter((p)=>p.id== !product.id);
        setCartItem(items);
    }
    return (
        <UserContext.Provider
            value={{ Products, setProducts, cardItem, setCartItem, location,cardCount,setCardCount,cardSubTotal,setCardSubTotal,handleAddCard,handleCardRemove }}>
            {children}
        </UserContext.Provider>
    )
}

export default AppContext
