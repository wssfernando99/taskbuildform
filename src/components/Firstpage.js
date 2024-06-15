import React from 'react'
import './firstpage.css'

export const Firstpage = () => {
  return (
    <div className='firstpage-container'>
        <div className='firstpage-first'>
            <h3 className='text-icon'>1➞</h3>
            <h3 className='text-topic'>Before we start, what is your name?</h3>
        </div>
        <div className='firstpage-second'>
            <label className='label-section'>First name</label>
            <input htmlfor='fname' className='form-input' placeholder='Jane' type='text' ></input>
        </div>
        <div className='firstpage-third'>
        <label className='label-section'>Last name</label>
        <input htmlfor='lname' className='form-input' placeholder='Smith' type='text'></input>
        </div>
        <div className='firstpage-fourth'>
            <button className='fourth-btn'>OK</button>
            <p className='fourth-enter'>press <b>Enter ↵</b></p>
        </div>
    </div>
  )
}
