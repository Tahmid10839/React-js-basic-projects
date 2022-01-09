import React from 'react';

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { id, name, image, date } = person;
                return <article key={id} className="person">
                    <img src={image} alt={name} />
                    <div>
                        <h4>{name}</h4>
                        <p>{new Date().getFullYear() - date.split('/')[2]} years</p>
                    </div>
                </article>
            })}
        </>
    );
};

export default List;