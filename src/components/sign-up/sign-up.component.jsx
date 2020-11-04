import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument}from '../../firebase/firebase.utils'

/* STYLED COMPONENTS */
import {SignUpContainer, SignUpTitle} from './sign-up.styles';

class SignUp extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.state = {
            displayName:'', 
            email:'',
            password:'',
            confirmPassword:'', 
        }
    }
    
    handleSubmit = async (event) => {
        const {displayName, email, password, confirmPassword} = this.state;
        event.preventDefault();
        if (password !== confirmPassword){
            alert('Passwords do not match') 
            return;
        }
        
        try{
            
        const {user} = await auth.createUserWithEmailAndPassword(email, password);
        
        await createUserProfileDocument(user,{displayName});
        this.setState({
            displayName:'', 
            email:'',
            password:'',
            confirmPassword:'',   
        })
        
        }catch(err){  
            console.log(err)  
        } 
    }
    
    handleChange = (event)=>{
        const {name,value} = event.target;
        this.setState({[name]:value}) 
    }
    
    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            
            <SignUpContainer>
                <SignUpTitle>I do not have an account</SignUpTitle>
                <span>SIgn up with your email and password</span>
                
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
                    <FormInput type="email" name='email' value={email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type="password" name='password' value={password} handleChange={this.handleChange} label='Password' required />
                    <FormInput type="password" name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password' required />
                    
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
            
        )
        
    }
    
}

export default SignUp;