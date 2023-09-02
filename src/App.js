import React from 'react'
import {useState} from 'react'
import validator from 'validator'

function App() {
  const [isShow, setIsShow] = useState('')
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [university, setUniversity] = useState('')
  const [cgpa, setCgpa] = useState('')
  const [comapny, setComapany] = useState('')

  const handleAlphabets = (inputValue, setter) => {
    const alphabet = /^[a-zA-Z\s]*$/;
    if (alphabet.test(inputValue)) {
      setter(inputValue);
    }
  };
  

const handleEmail = (email)=> {
  return validator.isEmail(email)
}

const handlePhone = (phoneNo)=> {
  return validator.isMobilePhone(phoneNo, 'any')
}

const handleCgpa = (cgpa) => {
  return validator.isFloat(cgpa, { min: 0, max: 4 }); // Adjust the min and max values as needed
};

const handleSubmit = (e)=> {
   if(!firstName || !lastName || !email || !phoneNo || !university || !cgpa || !comapny){
    alert('Please fill all the mandatory fields!')
      } 
      else if((firstName.length <= 3)  || (lastName.length <= 3)){
 alert('Name should be atleast 3 characters long!')
  }
  else if(!handleEmail(email)){
    alert('Please enter correct email!')
  }
  else if(!handlePhone(phoneNo)){
    alert('Please enter correct phone number!')
  }
  else if(!handleCgpa(cgpa)){
    alert('Please enter correct CGPA!')
  }
 
else {
  setIsShow(true)
}
}

  return (
    <div className="App">

      <h1>Registration Form</h1>

      <div className='component'>
      <div className='field1'>
        <div className='name1'>
      <p>*</p><span>First Name: </span>
      <input value={firstName} onChange={(e)=>handleAlphabets(e.target.value, setFirstName)} required/>
      </div>
      <div className='name2'>
      <p>*</p><span>Last Name:</span>
      <input value={lastName} onChange={(e)=>handleAlphabets(e.target.value, setLastName)} required/>
      </div>
      </div>
        <div className='field'>
      <span>Date-of-Birth: </span>
      <input type="number" min="1900" max="3000" placeholder="YY" onChange={(e)=> (e.target.value)}/>
      <input type="number" min="1" max="12" placeholder="MM" onChange={(e)=> (e.target.value)}/>
      <input type="number" min="1" max="31" placeholder="DD" onChange={(e)=> (e.target.value)}/>
      </div>
        <div className='field'>
      <span>Address: </span>
      <input type="text" onChange={(e)=>(e.target.value)} />
      </div>
      <div className='field'>
      <p>*</p><span>Email: </span>
      <input type="e-mail" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className='field'>
      <p>*</p><span>Phone-No: </span>
      <input type="number" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} placeholder="Format: XXXXXXXXXXX" required/>
      </div>
      <div className='field'>
      <span>LinkedIn Id: </span>
      <input type="text" onChange={(e)=>(e.target.value)}/>
      </div>
      <div className='field'>
      <p>*</p><span>University Name: </span>
      <input type="text" value={university} onChange={(e)=>handleAlphabets(e.target.value, setUniversity)} required/>
      </div>
      <div className='field'>
      <p>*</p><span>CGPA: </span>
      <input type="number" value={cgpa} onChange={(e)=>setCgpa(e.target.value)} required/>
      </div>
      <div className='field'>
      <p>*</p><span>Why do you want to join this company?</span>
      <input type="text" value={comapny} onChange={(e)=>handleAlphabets(e.target.value, setComapany)} required/>
      </div>
      <div className='button'>
      <button onClick={handleSubmit}>Submit</button>
      </div>
      </div>
      {isShow && <div className='container'>
        <div className='response'>
          <h3>Your response has been recorded.</h3>
          </div>
          </div>}
    </div>
  );
}

export default App;
