import React from 'react'
import { FaTimes } from "react-icons/fa";
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button className='close' onClick={() => props.setTrigger(false)}>
                    <FaTimes />
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup