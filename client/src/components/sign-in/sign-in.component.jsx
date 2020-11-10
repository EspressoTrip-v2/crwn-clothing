import React, {useState} from 'react';

/* REACT COMPONENTS */
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


/* ACTIONS */
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

/* STYLED COMPONENT */
import {SignInContainer, ButtonsContainer, SingInTitle} from './sign-in.styles';

/* REACT REDUX */
import {connect} from 'react-redux';

const SignIn = ({emailSignInStart,googleSignInStart}) =>{
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        emailSignInStart(email, password)
    }
    
    return(
        
        <SignInContainer>
            <SingInTitle>I already have an account</SingInTitle>
            <span>Sign in with your email and password</span>
            
            <form onSubmit={handleSubmit} >
                <FormInput name="email"  type="email"  value={email} handleChange={(e)=>setEmail(e.target.value)} label='email' required/>
                <FormInput name="password" type="password" value={password} handleChange={(e)=>setPassword(e.target.value)} label='password' required/>
                
                <ButtonsContainer>
                <CustomButton type="submit">Sign in</CustomButton> 
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign in with Google </CustomButton> 
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )  
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);