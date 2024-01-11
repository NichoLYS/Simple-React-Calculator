import React from 'react'
import './Support.css'
import { useState, ChangeEvent } from 'react';


const SupportPage: React.FC = () => {
  interface SupportFormPage {
    firstName: string;
    lastName: string;
    email: string;
    topic: string;
    description: string;
  }
  const initialState: SupportFormPage = {
    firstName: '',
    lastName: '',
    email: '',
    topic: '',
    description: '',
  }
  const [input , setInput] = useState<SupportFormPage>(initialState);
  const {firstName, lastName, email, topic, description} = input;
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showTicket, setShowTicket] = useState<boolean>(false);
  const [randomNumber, setRandomNumber] = useState<number|null>(null);

  const handleButton = () => {
    const newRandNumber = Math.floor(Math.random()*999) + 100;
    setRandomNumber(newRandNumber)
    setShowForm(!showForm);
    setShowTicket(!showTicket);

  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    setInput({...input, [e.target.name] : e.target.value});
  }

  return (
    <div className='supportContainer'>
      {showForm && (
          <div className='container-form'>
          <div className='title'><h1>Support Ticket Form</h1></div>
          <hr></hr>
          <form action="#">
            <div className='user-details'>
              <p>Name</p>
              <label className='firstName'>
                <input id='firstName' name='firstName' type='text' required value={firstName} onChange={handleChange}/>
              </label>
              <label className='lastName'>
                <input id='lastName' name='lastName' type='text' required value={lastName} onChange={handleChange}/>
              </label>
              <label className='email'>
                <span className='details'>Email</span>
                <input id='email' name='email' type='email' required value={email} onChange={handleChange}/>
              </label>
              <p>Topic</p>
              <label className='topic'>
                <p>What can we help today?</p>
                <label htmlFor="general" className='general'><input id="general" type="radio" name="topic" className="inline" 
                onChange={handleChange} checked={topic === 'option1'} value='option1'/> General</label>
                <label htmlFor="bug" className='bug'><input id="bug" type="radio" name="topic" className="inline" 
                onChange={handleChange} checked={topic === 'option2'} value='option2'/> Bug</label>
              </label>
              <div className='description'>
                <span className='details-description'>Description</span>
                <textarea id="description" name="description" rows={3} cols={30} placeholder="Description Report" value={description} onChange={handleChange}></textarea>
              </div>
            </div>
            <button onClick={handleButton}className={(firstName && lastName && email && description && topic) !== '' ? "send" : 'unsend'}>SEND</button>
          </form>
        </div>
      )}
      

    {showTicket && (
      <div className='container-form2'>
      <div className='title'><h1>Support Ticket Form</h1></div>
        <hr></hr>
        <div className='message'>
        <h2 className='ticketMessage'>Thank you for sending us your report, we will <br></br>track the problem now</h2>
        <p className='ticketNumber'>ticket number: <div className='number'>{randomNumber}</div></p>
        </div>
      </div>
    )}
    </div> 
  )
}

export default SupportPage