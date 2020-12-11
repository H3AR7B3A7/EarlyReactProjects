import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <button className="question" onClick={() => setShowInfo(!showInfo)}>
            <header>
                <h4>{title}</h4>
                <span className='btn'>
                    {showInfo? <AiOutlineMinus/>:<AiOutlinePlus/>}
                </span>
            </header>
            {showInfo && <p>{info}</p>}
        </button>
    )
};

export default Question;