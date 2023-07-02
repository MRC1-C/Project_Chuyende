import { Image } from 'antd'
import React from 'react'

type CartItem = {
    index: number,
    name: string,
    price: number,
    image: string,
    quantity: number,
}

const CartItem = (props: CartItem) => {
    return (
        <div className='md:px-0 py-4 grid grid-cols-3 gap-3'>
            <div className='col-span-2'>
                <Image className='w-full aspect-video object-cover rounded-lg' preview={false} src={props.image} />
            </div>
            <div className='col-span-1'>
                <div>{props.name}</div>
                <div>{props.price}</div>
                <div>{props.quantity}</div>
            </div>
        </div>
    )
}

export default CartItem