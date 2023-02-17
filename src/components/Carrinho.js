import ShoppingCart from "../assets/ShoppingCart.png"
import MinusCircle from "../assets/MinusCircle.png"
import PlusCircle from "../assets/PlusCircle.png"

function Carrinho() {
    return(
        <>
        <div className="carrinho-icone">
              <img alt="carrinho" src={ShoppingCart}/>
              <p>Arraste seu produto aqui para colocar no carrinho</p>
            </div>
            <div className="botoes">
              <img src={MinusCircle} alt="menos"/>
              <img src={PlusCircle} alt="mais"/>
            </div>
        </>
    )
}

export default Carrinho