import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'
import './SignUp.css'
import { Link } from 'react-router-dom'


export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusName, setIsFocusName] = useState(false)
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  const [isFocusPassword, setIsFocusPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');


  let classNameFocus = style.focusName
  let classEmailFocus = style.focusEmail
  let classPasswordFocus = style.focusPassword

  isFocusName ? classNameFocus = style.focusName : classNameFocus = style.semFocusName
  isFocusEmail ? classEmailFocus = style.focusEmail : classEmailFocus = style.semFocusEmail
  isFocusPassword ? classPasswordFocus = style.focusPassword : classPasswordFocus = style.semFocusPassword

  useEffect(() => {
    if(name === '' || email === '' || password === ''){
      setErrorMessage('Obs: Todos campos são obrogatórios!!!')
      return
    }

    setErrorMessage('')
  }, [name, email,password])

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    
    const formDataSignUp = {
      name,
      email,
      password
    }
    console.log(formDataSignUp);
  }

  const handleNameSignUp = (event) =>{
    setName(event.target.value)
  }

  const handleEmailSignUp = (event) =>{
    setEmail(event.target.value)
  }

  const handlePasswordSignUp = (event) =>{
    setPassword(event.target.value)
  }


  return (
  <div>
    <div className = 'container'>

      <div className = 'background'></div>

      <div className = 'contentSignUp'>
        <img src={logoImg} alt='goBarber' />

        <form onSubmit={handleFormSubmit}>
          <h1>Faça seu cadastro</h1>

          <input 
            style={classNameFocus}
            type='text' 
            placeholder='Nome . . .'  
            onChange={handleNameSignUp}
            onFocus={() => setIsFocusName(true)}
            onBlur={() => setIsFocusName(false)}/>

          <input 
            style={classEmailFocus}
            type='text' 
            placeholder='E-mail . . .' 
            onChange={handleEmailSignUp}
            onFocus={() => setIsFocusEmail(true)}
            onBlur={() => setIsFocusEmail(false)}/>
          
          <input 
            style={classPasswordFocus}
            type='password' 
            placeholder='Senha . . .' 
            onChange={handlePasswordSignUp}
            onFocus={() => setIsFocusPassword(true)}
            onBlur={() => setIsFocusPassword(false)}/>

          <button  disabled={errorMessage.trim() !== ''}> 
            Cadastrar 
          </button>
        </form>

        <span className='errorMessager'>{errorMessage}</span>
        <Link to="/" className='Voltar'>
         <FiArrowLeft />
         Voltar para Login
        </Link>
      </div>
    </div>
  </div>
  );
}

const style = {
  focusName: {
    color:'#ff9000',
    borderColor: '#ff9000'
  },
  semFocusName:{
    color: '#ff9000',
    borderColor: '#212329'
  },
  focusEmail: {
    color:'#ff9000',
    borderColor: '#ff9000'
  },
  semFocusEmail:{
    color: '#ff9000',
    borderColor: '#212329'
  },
  focusPassword: {
    color:'#ff9000',
    borderColor: '#ff9000'
  },
  semFocusPassword:{
    color: '#ff9000',
    borderColor: '#212329'
  }
}