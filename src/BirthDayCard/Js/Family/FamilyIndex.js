import React from 'react'
import ChildCard from './ChildCard'
import ParentCard from './ParentCard'

export const FamilyIndex = () => {
  return (
    <div className='col-lg-12'>
        <ChildCard />
        <ParentCard />

    </div>
  )
}
