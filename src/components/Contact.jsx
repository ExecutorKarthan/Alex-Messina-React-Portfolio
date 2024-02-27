//Import needed modules for functionality
import {useState} from 'react';
import {validateEmail} from '../utils/validators'

export default function contactForm () {
  
  const [contactName, setName] = useState('');
  const [contactEmail, setEmail] = useState('');
  const [contactMessage, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    message:'',
});

  const possibleErrors = {
    name: 'You need to provide a name to contact Alex.',
    email: 'You need to provide a valid email to contact Alex.',
    message: 'You need to provide a message to contact Alex.',
  }

   const handleClickChange = (e) =>{
    const { target } = e;
    const inputType = target.name;
    if (inputType === 'contactName' && contactName === '' ){
      setErrorMessage({
        name: possibleErrors.name,
        email: errorMessage.email,
        message: errorMessage.message,
      });
    }
    if (inputType === 'contactEmail' && !validateEmail(contactEmail)){
      setErrorMessage({
        name: errorMessage.name,
        email: possibleErrors.email,
        message: errorMessage.message,
      });
    }
    if (inputType === 'contactMessage' && contactMessage === ''){
      setErrorMessage({
        name: errorMessage.name,
        email: errorMessage.email,
        message: possibleErrors.message,
      });
    }
    if(errorMessage.name === ''  && errorMessage.email === '' && errorMessage.email === '' && contactName != "" && validateEmail(contactEmail) && contactMessage != ""){
      document.getElementById('submitBtn').classList.remove('disabled')
      document.getElementById('submitBtn').classList.add('enabled')
    }
    else{
      document.getElementById('submitBtn').classList.add('disabled')
      document.getElementById('submitBtn').classList.remove('enabled')
    }
  }

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
      
    if (inputType === 'contactName'){
      setName(inputValue)
      setErrorMessage({
        name: '',
        email: errorMessage.email,
        message: errorMessage.message,
      });
    }
    if (inputType === 'contactEmail'){
      setEmail(inputValue)
      setErrorMessage({
        name: errorMessage.name,
        email: '',
        message: errorMessage.message,
      });
    }
    if (inputType === 'contactMessage'){
      setMessage(inputValue)
      setErrorMessage({
        name: errorMessage.name,
        email: errorMessage.email,
        message: '',
      });
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
          onBlur = {handleClickChange}
          onChange={handleInputChange}
          type="text"
          placeholder="Your name?"
        />       
        {errorMessage.name && (
          <div>
            <p className="error-text">{errorMessage.name}</p>
          </div>
        )} 
        {/* Create a space for the sender to submit a validated email address */}
        <label className='row'>Email Address</label>
        <textarea
          className="form-control"
          value={contactEmail}
          name="contactEmail"
          onBlur = {handleClickChange}
          onChange={handleInputChange}
          type="email"
          placeholder="What is your email?"
        />
        {errorMessage.email && (
          <div>
            <p className="error-text">{errorMessage.email}</p>
          </div>
        )}
        {/* Create a space for the user to submit a message to me. */}
        <label className='row'>Message</label>
        <textarea
          className="form-control"
          value={contactMessage}
          name="contactMessage"
          onBlur = {handleClickChange}
          onChange={handleInputChange}
          type="text"
          placeholder="What message would you like to send?"
        />
        {/* Create an error message if something as gone wrong */}
        {errorMessage.message && (
          <div>
            <p className="error-text">{errorMessage.message}</p>
          </div>
        )}
        {/* Create a button to submit the form */}
        <button id="submitBtn" type="submit" className="btn btn-dark disabled mt-2">Submit</button>
      </form>
    </div>
  )   
}