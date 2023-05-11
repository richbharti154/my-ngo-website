import React from 'react'
export default function Input(props) {
    
    return (
        <div>
            <input placeholder={props.placeHolder} onChange={props.onChange}  type={props.type}   />
        </div>
    )
}

