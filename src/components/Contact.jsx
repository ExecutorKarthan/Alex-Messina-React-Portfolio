//Import needed modules for functionality
import { useState, Component, useEffect } from 'react';
import {validateEmail} from '../utils/validators'

export default function contactForm () {
  const [contactName, setName] = useState('');
  const [contactNameClick, setNameClick] = useState(0);
  const [contactEmail, setEmail] = useState('');
  const [contactEmailClick, setEmailClick] = useState(0);
  const [contactMessage, setMessage] = useState('');
  const [contactMessageClick, setMessageClick] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() =>{
    const checker = (e) =>{
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      console.log(`The input type is ${inputType}`)
      console.log(`The input value is ${inputValue}`)
      console.log(`The contactName is ${contactName}`)
      console.log(`The name click is ${contactNameClick}`)
      console.log(`The contactEmail is ${contactEmail}`)
      console.log(`Email is valid: ${validateEmail(contactEmail)}`)
      console.log(`The email click is ${contactEmailClick}`)
      console.log(`The contactMessage is ${contactMessage}`)
      console.log(`The message click is ${contactMessageClick}`)
      console.log(contactName === '')
      if(inputType != 'contactName' && contactName === '' && contactNameClick > 0){
        setErrorMessage('You need to provide a name to contact Alex.');
      }
      if(inputType != 'contactEmail' && contactEmailClick > 0 && !validateEmail(contactEmail)){
        setErrorMessage('You need to provide a valid email to contact Alex.');
      }
      if(inputType != 'contactMessage' && contactMessage === '' && contactMessageClick > 0){
        setErrorMessage('You need to provide a message to contact Alex.');
      }
      if(contactName != '' && contactEmail != '' && contactMessage != '' && validateEmail(contactEmail)){
        setErrorMessage('');
        document.getElementById('submitBtn').classList.remove('disabled')
        document.getElementById('submitBtn').classList.add('enabled')
      }
    }
    document.addEventListener('mousedown', checker)
  }, [contactNameClick, contactEmailClick, contactMessageClick])

  const handleClickChange = (e) =>{
    console.log('Field clicked')
    const { target } = e;
    const inputType = target.name;

    if (inputType === 'contactName'){
      setNameClick(contactNameClick + 1)
      console.log(`Contact clicks ${contactNameClick}`)
    }
    if (inputType === 'contactEmail'){
      setEmailClick(contactEmailClick + 1)
      console.log(`Contact clicks ${contactEmailClick}`)
    }
    if (inputType === 'contactMessage'){
      setMessageClick(contactMessageClick + 1)
      console.log(`Contact clicks ${contactMessageClick}`)
    }
  }

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
      
    if (inputType === 'contactName'){
      setName(inputValue)
      console.log(`Name set to ${contactName}`)
    }
    if (inputType === 'contactEmail'){
      setEmail(inputValue)
    }
    if (inputType === 'contactMessage'){
      setMessage(inputValue)
    }
  };

//Return a formatted html of a submission form
  return(
    <div className="container text-center">
      {/* Create a form for people to submit a message to me */}
      <form className="form">
        {/* Create a space for the sender to submit their name */}
        <label className='row'>Name:</label>
        <textarea
          className="form-control"
          value={contactName}
          name="contactName"
          onClick = {handleClickChange}
          onChange={handleInputChange}
          type="text"
          placeholder="Your name?"
        />        
        {/* Create a space for the sender to submit a validated email address */}
        <label className='row'>Email Address</label>
        <textarea
          className="form-control"
          value={contactEmail}
          name="contactEmail"
          onClick = {handleClickChange}
          onChange={handleInputChange}
          type="email"
          placeholder="What is your email?"
        />
        {/* Create a space for the user to submit a message to me. */}
        <label className='row'>Message</label>
        <textarea
          className="form-control"
          value={contactMessage}
          name="contactMessage"
          onClick = {handleClickChange}
          onChange={handleInputChange}
          type="text"
          placeholder="What message would you like to send?"
        />
        {/* Create a button to submit the form */}
        <button id="submitBtn" type="submit" className="btn btn-dark disabled mt-2">Submit</button>
      </form>
      {/* Create an error message if something as gone wrong */}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )   
}