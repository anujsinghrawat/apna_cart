import React from 'react'

export default function Footer(props) {
    console.log(props.totalAmount);
    return (
        <div className='row fixed-bottom'>
            <button className='btn btn-danger col-2'>Reset</button>
            <div className='bg-dark text-white text-center'>
                {props.totalAmount}
            </div>
            <button className='btn btn-primary col-2'>Pay Now</button>
        </div>
    )
}
