// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const lengthOfCartList = cartList.length

      let totalSum = 0
      cartList.forEach(eachObject => {
        totalSum += eachObject.quantity * eachObject.price
      })

      return (
        <div className="CartSummaryContainer">
          <div className="insideSummaryContainer">
            <h1>Order Total : {totalSum}/-</h1>
            <p>{lengthOfCartList} Items in cart</p>
            <button type="button" className="checkOutBtn">
              checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
