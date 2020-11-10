import React, {useState} from 'react';

/* REACT COMPONENTS */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* REACT REDUX */
import {connect} from 'react-redux';

/* ACTIONS */
import {signUpStart} from '../../redux/user/user.actions';


/* STYLED COMPONENTS */
import {SignUpContainer, SignUpTitle} from './sign-up.styles';

const SignUp =({signUpStart}) =>{
    
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        /* CHECK IS PASSWORDS MATCH */
        if (password !== confirmPassword){
            alert('Passwords do not match') 
            setPassword('');
            setConfirmPassword('') 
            return;
            }

        signUpStart({email, password, displayName})   

    }

        return(
            
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>
                
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput type="text" name='displayName' value={displayName} handleChange={(e)=>setDisplayName(e.target.value)} label='Display Name' required />
                    <FormInput type="email" name='email' value={email} handleChange={(e)=>setEmail(e.target.value)} label='Email' required />
                    <FormInput type="password" minLength={6} name='password' value={password} handleChange={(e)=>setPassword(e.target.value)} label='Password' required />
                    <FormInput type="password" minLength={6} name='confirmPassword' value={confirmPassword} handleChange={(e)=>setConfirmPassword(e.target.value)} label='Confirm Password' required />
                    
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
            
        )  
    
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userDetail) => dispatch(signUpStart(userDetail))
})

export default connect(null, mapDispatchToProps)(SignUp);