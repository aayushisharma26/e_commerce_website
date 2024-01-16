import './cart.css';

function Cart_item () {
  return (
    <div className='row'>
      <div className='col-3'>
        <img src='chair.png' />
      </div>
      <div className='col-9'>
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
