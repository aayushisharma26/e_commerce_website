import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Electronics_data from './product_data';
import  ProductDetail from './product_detail';

function Page() {
  return (
    <div>
      < Electronics_data/>
      <ProductDetail/>
    </div>
  )
}

export default Page;
