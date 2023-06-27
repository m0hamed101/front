import React from 'react'
import './inputform.css'

export const Inputform = (prpos) => {
    return (
        <div className='forminput'>
            <input ref={prpos.refe}  placeholder={prpos.placeholder} className='inputform' type="text" />


        </div>
    )
}
