import React from 'react'
import './Item.css'


const Item = (props) => {
  return (
    <div className='item'>
<img src={props.image} alt="" />
      <p>{props.n}</p>
      <div className="item-prices">
        <div className="item-price-new">
            Lei {props.new_price}
        </div>
        <div className="item-price-old">
            Lei {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item
