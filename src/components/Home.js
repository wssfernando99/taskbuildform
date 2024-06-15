import React from 'react'
import './home.css'

export const Home = () => {
  return (
    <div className='home-container'>
        <div className='first-container'>
            <div className='first-item1'><h1>Launch your Data Career<br className="break" />in Weeks, not Years</h1></div>
            <div className='first-item2'>
                <p>What to expect:</p>
                <p className='ptag'>- <b>Short-answer</b> question & <b>No</b> cover letter</p>
                <p className='ptag'>- Takes 4 mins on average</p>
            </div>
            <div className='first-item3'>
                <button className='first-item3-btn'>Start Your Journey</button>
                <p className='enter'>press <b>Enter ↵</b></p>
            </div>
            <div className='first-item4'>
                <p>0 people have filled this out</p>
            </div>
        </div>
        <div className='second-container'></div>
    </div>
  )
}
