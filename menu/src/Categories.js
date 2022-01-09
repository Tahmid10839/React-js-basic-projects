import React, { useState, useEffect } from 'react'

const Categories = ({ categories, filterItems }) => {
    const [value, setValue] = useState(0);
    return (
        <div className="btn-container">
            {categories.map((category, index) => {
                return <button key={index} className={`btn ${value === index && 'active'}`} onClick={() => {
                    filterItems(category);
                    setValue(index);
                }}>
                    {category}
                </button>
            })}
        </div>
    )
}

export default Categories
