import React from 'react'
import Slider from '../Slider/Slider.jsx';
import './VenueDetails.css';

const clock = <svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 -960 960 960" width="18"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
const loc = <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>

const VenueDetails = () => {
  return (
    <div className='venuedetails'>
      <Slider/>
      <h1><b>Cielo Disparo Sports</b></h1>
      <div className='datenadd'>
        <div className='clock'>{clock}<p className='time'>7pm - 10pm</p></div>
        <div className='add'>{loc}<p className='address'>1st Floor, Wz 121/2, opposite Rahul dairy, Vasantkunj, New Delhi, Delhi, 110012</p></div>
      </div>
      <div className='upcoming'>
         2 UPCOMING
      </div>
      <div className='pricechart'>
        <div className='first_section'>
          <p className='headings'>Price Chart</p>
          <button>BOOK NOW</button>
        </div>
        <p className='condition'>Pricing is subjected to change and is controlled by venue</p>
        <div className='prices'>
          <p className='days'>Monday - Sunday</p>
          <div className='schedule'>
             <p>7:00 PM - 10:00 PM</p>
             <p className='price'><b>₹ 400.0/hour</b></p>
          </div>
        </div>

        <div className='prices'>
          <p className='days'>Holiday(s)</p>
          <div className='schedule'>
             <p>7:00 PM - 10:00 PM</p>
             <p className='price'><b>₹ 400.0/hour</b></p>
          </div>
        </div>
      </div>
      <p className='headings'>Amenities</p>
      <div className='amaenities'>
        <p className='fac'>Parking</p>
        <p className='fac'>First Aid</p>
        <p className='fac'>Change Room</p>
      </div>
      <div className='amaenities'>
        <p className='water'>Drinking Water</p>
      </div>
    </div>
  )
}

export default VenueDetails
