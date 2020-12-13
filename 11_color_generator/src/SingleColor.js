import { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor, size }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb) // Using rgbToHex library instead of utils
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(()=>{
            setAlert(false)
        },3000)
        return () =>clearTimeout(timeout)
    }, [alert])

    return (
        <button className={`color ${index > (size/2) && 'color-light'}`} 
        style={{ backgroundColor: `rgb(${bcg})` }} onClick={()=> navigator.clipboard.writeText(hexValue) & setAlert(true)}>
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            {alert && <p className={`alert ${index > (size/2) && 'color-light'}`}>copied to clipboard</p>}
        </button>
    )
}

export default SingleColor