import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, firstName, lastName));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateFirstName = e => {
    setFirstName(e.target.value)
  }

  const updateLastName = e => {
    setLastName(e.target.value)
  }

  if (user) {
    return <Redirect to='/' />;
  }

  const reset = () => {
    setEmail('')
    setPassword('')
    setUsername('')
    setRepeatPassword('')
    setFirstName('')
    setLastName('')
  }


  return (
    <div className='login__bkg-1'>
    <div className='login__logo-container'>

    </div>
      <div className='signup__form-container'>
      <div className='signupform__welcome-top'></div>
        <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
        <form onSubmit={onSignUp} className='signup__form'>

          <div className='login__field'>
            <label className='login__inputFiled'>User Name</label>
            <input
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
              className='login__input'
            ></input>
          </div>
          <div className='login__field'>
            <label className='login__inputFiled'>Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              className='login__input'
            ></input>
          </div>
          <div className='login__field'>
            <label className='login__inputFiled'>First Name</label>
            <input
              type='text'
              name='username'
              onChange={updateFirstName}
              value={firstName}
              className='login__input'
            ></input>
          </div>
          <div className='login__field'>
            <label className='login__inputFiled'>Last Name</label>
            <input
              type='text'
              name='username'
              onChange={updateLastName}
              value={lastName}
              className='login__input'
            ></input>
          </div>
          <div className='login__field'>
            <label className='login__inputFiled'>Password</label>
            <input
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
              className='login__input'
            ></input>
          </div>
          <div className='login__field'>
            <label className='login__inputFiled'>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
              className='login__input'
            ></input>
          </div>
          <button className='login__buttons signup' type='submit'>Sign Up</button>
          <button className='login__buttons cancel'onClick={reset}>Cancel</button>
        </form>
        <div className='login__txt-container'>
          <p className='login__txt'>Don't have an account? Click <a className='link__singup' href='/singup'>Here </a>
           to log in!</p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
