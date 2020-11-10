import React from 'react';

/* REACT COMPONENTS */
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component'

/* STYLED COMPONENTS */
import {SignInAndSignUpContainer} from './sign-in-and-sign-up.styles';

const SignInAndSignUp = ()=>(
    
    
    <SignInAndSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpContainer>
    
)

export default SignInAndSignUp;