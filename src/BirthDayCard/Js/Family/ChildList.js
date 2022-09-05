import React from 'react';
const ChildList = ({ children }) => {
    return (
        <>
            {children.map((children_list) => {
                const { id, name, age, image } = children_list;
                return (
                    <article key={id} className='person'>
                        <img src={children_list.image} alt={name} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })}
        </>
    );
};
export default ChildList;