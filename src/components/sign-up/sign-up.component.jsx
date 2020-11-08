import React from 'react';

/* REACT COMPONENTS */
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

/* REACT REDUX */
import {connect} from 'react-redux';

/* ACTIONS */
import {signUpStart} from '../../redux/user/user.actions';


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
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;
        
        /* CHECK IS PASSWORDS MATCH */
        if (password !== confirmPassword){
            alert('Passwords do not match') 
            this.setState({
                ...this.state,
                password:'',
                confirmPassword:'',   
            })
            return;
        }
        

        signUpStart({email, password, displayName})
        

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
                <span>Sign up with your email and password</span>
                
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
                    <FormInput type="email" name='email' value={email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type="password" minLength={6} name='password' value={password} handleChange={this.handleChange} label='Password' required />
                    <FormInput type="password" minLength={6} name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='Confirm Password' required />
                    
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
            
        )
        
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userDetail) => dispatch(signUpStart(userDetail))
})

export default connect(null, mapDispatchToProps)(SignUp);