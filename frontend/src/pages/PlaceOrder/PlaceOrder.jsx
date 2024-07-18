import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
          <p className="title">Delivery Information</p>
          <div className="multi-feilds">
            <input type="text" placeholder='First Name'/>
            <input type="text" placeholder='Last Name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='street'/>
          <div className="multi-feilds">
            <input type="text" placeholder='City'/>
            <input type="text" placeholder='state' />
          </div>
          <div className="multi-feilds">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Rs. {getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Rs. {2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>Rs. {getTotalCartAmount()+2}</b>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
