import {  useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import UserContext from './UserContext';
const AppContext = ( {children} ) => {
    const location = useLocation();
    const [icrQauntity,setIcrQauntity]=useState(1);
    const [Products, setProducts] = useState('')
    const [cardItem, setCartItem] = useState([]);
    const [cardCount,setCardCount]=useState(0)
    const [cardSubTotal,setCardSubTotal]=useState('');
    useEffect(()=>{},[cardItem])
    const handleAddCard=(product,qauntity)=>{
        let items=[...cardItem];
        let index=items.findIndex(p=>p.id===product.id)
        if(index !==-1){
            
            items[index].qauntity +=qauntity 
        }else{
            product.qauntity=qauntity
            items=[...items,product]
        }
        setCartItem(items)
    }
    const handleCardRemove=(product)=>{
        setCartItem((d)=>{
            return d.filter((arr,id)=>{
                return id !==product
            })
        })
        
    }
    const handleIcrQuantity=()=>{
        setIcrQauntity((incr)=>{
            return incr + 1
        })
      
    }
     const handleDecQuantity = () => {
       setIcrQauntity((dec) => {
           if(dec ===1) return 1
         return dec-1;
       });
     };
     const handleCardProductQauntity=(type,product)=>{
         let items=[...cardItem];
        let index=items.findIndex(p=>p.id===product.id)
        if(type === "inc"){
            items[index].qauntity += 1;
        }else if(type === "dec"){
            if(items[index].qauntity === 1) return;
            items[index].qauntity -= 1;
        }
        setCartItem(items)
     }
    return (
      <UserContext.Provider
        value={{
          Products,
          setProducts,
          cardItem,
          setCartItem,
          location,
          cardCount,
          setCardCount,
          cardSubTotal,
          setCardSubTotal,
          handleAddCard,
          handleCardRemove,
          handleIcrQuantity,
          setIcrQauntity,
          icrQauntity,
          handleDecQuantity,
          handleCardProductQauntity
        }}
      >
        {children}
      </UserContext.Provider>
    );
}

export default AppContext
