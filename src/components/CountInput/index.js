import React, { useState } from 'react'

import MinusIcon from 'assets/images/icons/feather-minus.png'
import PlusIcon from 'assets/images/icons/feather-plus.png'

import './style.scss'

const CountInput = ({label=null, initValue = 1, maxValue=null, minValue=0, handleChange, className=''}) => {
    const [value, setValue] = useState(initValue);

    const onPlus = () => {
        if(maxValue && maxValue <= value)
            return false
        setValue(value + 1);
    }

    const onMinus = () => {
        if(minValue >= value)
            return false
        setValue(value - 1);
    }

    return (
        <div className={`counter-input ${className}`} >
            { label && <label>{label}</label>}
            <span onClick={() => onMinus()}><img src={MinusIcon} /></span>
            <input className="form-control" value={value} onChange={handleChange}></input>
            <span onClick={()=> onPlus()}><img src={PlusIcon} /></span>
        </div>
    )
}

export default CountInput