import React, { useState } from 'react'
import './Login.css'
import { Link , useNavigate } from 'react-router-dom';
import { auth } from "./firebase";



function Login() {
    const navigate = useNavigate();
    // const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        //firebase login stuff
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            navigate('/');
        })
        .catch(error=> alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if(auth){
                navigate('/');
            }
            //it successfully creates a new user with email and password
            // console.log(auth);
        })
        .catch(error => alert(error.message))
    }


  return (
    <div className="login">
    <Link to='/'>
        <img
            className="login__logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
        />
    </Link>
    <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
            {/* <h5>Username</h5>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}/> */}
            <h5>E-mail</h5>
            <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>  
            {/* gaining access to the email */}
             {/*we are mapping the email mentioned abive here onchange triggers when typed. then the value is stored in setemail */}
            <h5>Password</h5>
            {/* Here while typing the pass, the user will see asterix insetad of text */}
            <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

            <button type='submit' onClick={signIn} className='login__button'>Sign-in</button>
        </form>
        <p className="login__terms">By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <p className="login__redirect">New Here? </p>
        <button onClick={register} className="login__register">Create Account</button>
    </div>
</div>
)
}
export default Login
