import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Questions = ({ title, info }) => {
    const [moreBtn, setMoreBtn] = useState(false);
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className='btn' onClick={() => setMoreBtn(!moreBtn)}>{moreBtn ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
            </header>
            {moreBtn && <p>{info}</p>}
        </article>
    )
}

export default Questions
