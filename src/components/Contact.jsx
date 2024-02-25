import { useState, useEffect } from 'react';
import {validateEmail} from '../utils/validators'

function contactForm () {
  const [contactName, setName] = useState('');
  const [contactNameClick, setNameClick] = useState(0);
  const [contactEmail, setEmail] = useState('');
  const [contactEmailClick, setEmailClick] = useState(0);
  const [contactMessage, setMessage] = useState('');
  const [contactMessageClick, setMessageClick] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(()=>{
    const checker = (e) =>{
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      if(inputType === 'contactName'){
        setNameClick(contactNameClick + 1)
      }
      if(inputType === 'contactEmail'){
        setEmailClick(contactEmailClick + 1)
      }
      if(inputType === 'contactMessage'){
        setMessageClick(contactMessageClick + 1)
      }
      if(inputType != 'contactName' && contactName === '' && contactNameClick > 0){
        setErrorMessage('You need to provide a name to contact Alex.');
      }
      if(inputType != 'contactEmail' && contactEmail === '' && contactEmailClick > 0){
        setErrorMessage('You need to provide an email address to contact Alex.');
      }
      if(inputType != 'contactMessage' && contactMessage === '' && contactMessageClick > 0){
        setErrorMessage('You need to provide a message to contact Alex.');
      }
    }
    document.addEventListener('click', checker)
  }, [contactNameClick, contactEmailClick, contactMessageClick])

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
      
      if (inputType === 'contactName'){
          setName(inputValue)
          return
        }
      if (inputType === 'contactEmail'){
        if(!validateEmail(inputValue)){
          setErrorMessage('You need to provide a valid email to contact Alex.');
        }
        else{
          setEmail(inputValue)
        }
        return
      }
      if (inputType === 'contactMessage'){
        setMessage(inputValue)
        return
      }
    };

  return(
    <div className="container text-center">
      <form className="form">
        <input
          value={contactName}
          name="contactName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your name?"
        />
        <input
          value={contactEmail}
          name="contactEmail"
          onChange={handleInputChange}
          type="email"
          placeholder="What is your email?"
        />
        <input
          value={contactMessage}
          name="contactMessage"
          onChange={handleInputChange}
          type="text"
          placeholder="What message would you like to send?"
        />
        <button type="submit">Submit</button>
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