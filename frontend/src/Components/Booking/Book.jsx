import React, {useState} from 'react';
import './Book.css';

const Book = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log();
    }

  return (
    <div className='booking'>
    <div className='wrapper_booking'>
        <form onSubmit={handleSubmit}>
            <h1>Book Now</h1>
            <div className='input-box'>
                <label for="booking">Select a date:</label>
                <input type="date" id="booking" name="booking" />
            </div>

            <div className='input-box'>
                <label for="booking">Select a time:</label>
                <input type="time" id="booking" name="booking" />
            </div>

            <div className='input-box'>
                <label for="booking">Duration (in hour):</label>
                <input type="number" id="booking" name="booking" min="1" max="3" />
            </div>
            <button type="submit">Book</button>
        </form>
    </div> 
    </div>
  )
}

export default Book;
