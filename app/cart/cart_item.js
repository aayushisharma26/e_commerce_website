import './cart.css';

function Cart_item () {
  return (
    <div className='cart-item'>
      <div className='img-container'>
        <img src='chair.png' />
      </div>
      <div className='product-detail'>
        <div class='row justify-content-between'>
          <div class='col-4'>
            <div>Chair Wood</div>
            <div>Quantity</div>
            <div>Remove</div>
          </div>
          <div class='col-4'>Rs. 699</div>
        </div>
      </div>
    </div>
  )
}

export default Cart_item;
