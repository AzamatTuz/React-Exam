import React, { useReducer } from 'react'
import CartContext from './App'
import Cart from './Cart'

const initinlState = {
    cart: []
}



function Func() {

    function reducer(state, action) {
        switch (action.type) {
            case "ADD_TO_CART":
                return {
                    cart: [
                        ...state.cart,
                        action.payload
                    ]
                }
            case "DELETE":
                return {
                    cart: state.cart.filter((item, i) => i != action.payload)
                    
                }
            case "CLEAR":
                return {
                    cart: []
                    
                }
        
            default:
                break;
        }
    }

    
    

    const [state, dispatch] = useReducer(reducer, initinlState)

  return (
    <>
    
    <CartContext.Provider value={[state, dispatch]}>
        <Cart/>
    </CartContext.Provider>


    

        <section className='cardBox'>
            {state.cart.map((item, index) => 

                <article className='card' key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.price} $</p>
                    <button className='btn' onClick={() => dispatch({type: "DELETE", payload: index})}>Delete</button>
                    
                </article>

            )}

            {state.cart.length > 0 && <button className='btn' onClick={() => dispatch({ type: "CLEAR" })}>Clear Cart</button>}
        </section>

   
    
    </>
  )
}

export default Func