import { useContext } from "react"
import "../App.css"
import CartContext from "./App"

function Cart() {


    const products = [
        { id : 1, name: "Book", price: 100 },
        { id : 2, name: "Phone", price: 2000 },
        { id : 3, name: "Keys", price: 50 },
        { id : 4, name: "Toy", price: 250 },
    ]

    const dispatch = useContext(CartContext)[1]


  return (
    

        <section className='cardBox'>
            {products.map((product) => 

                <article className='card' key={product.id}>
                    <h1>{product.name}</h1>
                    <p>{product.price} $</p>
                    <button className='btn' onClick={() => dispatch({type: "ADD_TO_CART", payload: product})}>Add to Cart</button>
                </article>
            
            )}
        </section>

   
  )
}

export default Cart