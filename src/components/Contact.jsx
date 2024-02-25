import { useState, Component, useEffect } from 'react';
import {validateEmail} from '../utils/validators'

function contactForm () {
  let [contactName, setName] = useState('');
  let [contactNameClick, setNameClick] = useState(0);
  let [contactEmail, setEmail] = useState('');
  let [contactEmailClick, setEmailClick] = useState(0);
  let [contactMessage, setMessage] = useState('');
  let [contactMessageClick, setMessageClick] = useState(0);
  let [errorMessage, setErrorMessage] = useState('');

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
  }, [contactName, contactEmail, contactMessage])

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

  return(
    <div className="container text-center">
      <form className="form">
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
        <button id="submitBtn" type="submit" class="btn btn-dark disabled mt-2">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
      
}

export default contactForm