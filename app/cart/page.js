import './cart.css'
import Page_Heading from '../components/page_heading'
import Cart_item from './cart_item'
import Button from '../components/button'

function Page () {
  return (
    <div className='abc'>
      <Page_Heading
        heading='My Cart'
        desc='All the products you added to purchase appear here'
      />
      <Cart_item />
      <Cart_item />
      <Button />
    </div>
  )
}

export default Page
