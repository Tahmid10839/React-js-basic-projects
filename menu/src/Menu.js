import React from 'react'

const Menu = ({ title, img, desc, price }) => {
    return (
        <div className="menu-item">
            <img src={img} alt={title} className='photo' />
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className='price'>$ {price}</h4>
                </header>
                <hr />
                <p>{desc}</p>

            </div>

        </div>
    )
}

export default Menu
