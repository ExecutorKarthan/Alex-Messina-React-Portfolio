//Import needed modules for functionality
import {useState} from 'react';
import {validateEmail} from '../utils/validators'

//Create logic to handle the form submission
export default function contactForm () {
  //Define a set of state variables that can be updated
  const [contactName, setName] = useState('');
  const [contactEmail, setEmail] = useState('');
  const [contactMessage, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    message:'',
});

  //Define the possible errors the form can throw
  const possibleErrors = {
    name: 'You need to provide a name to contact Alex.',
    email: 'You need to provide a valid email to contact Alex.',
    message: 'You need to provide a message to contact Alex.',
  }

  //Create a function to respond if the user clicked off a text field
   const handleClickChange = (e) =>{
    const { target } = e;
    const inputType = target.name;
    //If the user clicked away from the name input field and it is blank, fill in an error to be read
    if (inputType === 'contactName' && contactName === '' ){
      setErrorMessage({
        name: possibleErrors.name,
        email: errorMessage.email,
        message: errorMessage.message,
      });
    }
    //If the user clicked away from the email input field and it is blank, fill in an error to be read
    if (inputType === 'contactEmail' && !validateEmail(contactEmail)){
      setErrorMessage({
        name: errorMessage.name,
        email: possibleErrors.email,
        message: errorMessage.message,
      });
    }
    //If the user clicked away from the message input field and it is blank, fill in an error to be read
    if (inputType === 'contactMessage' && contactMessage === ''){
      setErrorMessage({
        name: errorMessage.name,
        email: errorMessage.email,
        message: possibleErrors.message,
      });
    }
    //Assuming there are no errors, the email is valid and there is data in the contact and name fields, change the button to enabled
    if(errorMessage.name === ''  && errorMessage.email === '' && errorMessage.email === '' && contactName != "" && validateEmail(contactEmail) && contactMessage != ""){
      document.getElementById('submitBtn').classList.remove('disabled')
      document.getElementById('submitBtn').classList.add('enabled')
    }
    //If there are errors, disable the submission button
    else{
      document.getElementById('submitBtn').classList.add('disabled')
      document.getElementById('submitBtn').classList.remove('enabled')
    }
  }

  //Create a function to respond to typed text
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    //If the contact name field was adjusted, update the state variable and blank out the corresponding error message
    if (inputType === 'contactName'){
      setName(inputValue)
      setErrorMessage({
        name: '',
        email: errorMessage.email,
        message: errorMessage.message,
      });
    }
    //If the contact email field was adjusted, update the state variable and blank out the corresponding error message
    if (inputType === 'contactEmail'){
      setEmail(inputValue)
      setErrorMessage({
        name: errorMessage.name,
        email: '',
        message: errorMessage.message,
      });
    }
    //If the contact message field was adjusted, update the state variable and blank out the corresponding error message
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
        {/* Display an error if the name input field is blank */}
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
        {/* Display an error if the email input field is blank or the email entered is invalid */}
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
        {/* Display an error if the message input field is blank */}
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