import React, {useState, useEffect} from 'react';
import logoImg from '../../assets/logo.svg'
import {FiLogIn} from 'react-icons/fi'
import './SignIn.css'
import { Link } from 'react-router-dom'


export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  const [isFocusPassword, setIsFocusPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState('');

  //classes para alterar o border do input
  let classEmailFocus = style.focusEmail
  let classPasswordFocus = style.focusPassword

  // verifica se o focus do input esta com valor true ou false para alterar o style do border
  isFocusEmail ? classEmailFocus = style.focusEmail : classEmailFocus = style.semFocusEmail
  isFocusPassword ? classPasswordFocus = style.focusPassword : classPasswordFocus = style.semFocusPassword

  useEffect(() => {
    if(email === '' || password === ''){
      setErrorMessage('Obs: Todos campos são obrogatórios!!!')
      return
    }

    setErrorMessage('')
  }, [email,password])


  const handleFormSubmit = (event) =>{
    event.preventDefault();

    const formDataSignIn = {
      email,
      password
    }

    console.log(formDataSignIn)
  }

  const handleEmailSignIn = (event) =>{
    setEmail(event.target.value)
  }
  
  const handlePasswordSignIn = (event) =>{
    setPassword(event.target.value)
  }

  return (
  <div>
    <div className = 'container'>

      <div className = 'contentSignIn'>
        <img src={logoImg} alt='goBarber' />

        <form onSubmit={handleFormSubmit}>
          <h1>Faça seu login</h1>
          
          <input 
            style={classEmailFocus}
            type='text' 
            placeholder='E-mail . . .' 
            onChange={handleEmailSignIn}
            onFocus={() => setIsFocusEmail(true)}
            onBlur={() => setIsFocusEmail(false)}/>
          
          <input
            style={classPasswordFocus} 
            type='password' 
            placeholder='Senha . . .' 
            onChange={handlePasswordSignIn}
            onFocus={() => setIsFocusPassword(true)}
            onBlur={() => setIsFocusPassword(false)}/>

          <button disabled={errorMessage.trim() !== ''}> 
            Entrar
          </button>

          <a href="forgot" className='esqueciSenha'>Esqueci minha senha</a>
        
        </form>
        <Link to="/signUp" className='criaConta'>
         <FiLogIn />
         Criar conta</Link>
      </div>

      <div className = 'background'></div>

    </div>
  </div>
  );
}

const style = {
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
