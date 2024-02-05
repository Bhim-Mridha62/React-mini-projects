
import React,{useState,useEffect} from 'react';

function Cartlist({ cart }) {
   let total = 0;
  cart.map((item) => {
    total += parseInt(item.price * item.quantity);
  });
  const [CART, setCART] = useState([]);
  useEffect(() => {
    setCART(cart)
    
  }, [cart])
  return (
    <div>
      {CART?.map((cartitem, cartindex) => {
        return (
          <div key={cartindex}>
            <img src={cartitem.url} width={45} />
            {cartitem.name}
            <button onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartindex===index?{...item,quantity:cartitem.quantity >0 ?cartitem.quantity-1:0}:item
              })
              setCART(_CART)
            }}>-</button>
            {cartitem.quantity}
            <button onClick={()=>{
              const _CART=CART.map((item,index)=>{
                return cartindex===index?{...item,quantity:cartitem.quantity+1}:item
              })
              setCART(_CART)
            }}>+</button>
            Rs.{cartitem.price * cartitem.quantity}/-
          </div>
        );
      })}
       <p>Total Price: Rs.{total}</p>
         
    </div>
  );
}

export default Cartlist;
