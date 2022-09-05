import React from 'react'
const ParentList = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, address, gender, age, phone } = person;
        return (
          <article key={id} className='children_list'>
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <p>{address}</p>
              <p>{gender}</p>
              <p>{phone}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
export default ParentList