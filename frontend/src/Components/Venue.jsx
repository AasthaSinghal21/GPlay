import React from 'react'
import VenueCard from './'

const Venue = ({cricket, football, badminton}) => {
  return (
    <div className='Venue'>
       {cricket && cricket.map((item,index)=>(
          <VenueCard />
       ))}
      
    </div>
  )
}

export default Venue
