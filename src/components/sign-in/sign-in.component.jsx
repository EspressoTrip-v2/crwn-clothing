import React from 'react';

/* REACT COMPONENTS */
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'


/* ACTIONS */
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';

/* STYLED COMPONENT */
import {SignInContainer, ButtonsContainer, SingInTitle} from './sign-in.styles';

/* REACT REDUX */
import {connect} from 'react-redux';

class SignIn extends React.Component{
    
    constructor(props){
        
        super(props);
        
        this.state = {   
            email: '',
            password: '', 
        }

    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const {emailSignInStart} = this.props;
        
        /* DISPATCH ACTIONS */
        emailSignInStart(email, password)

    }
    
    handleChange = (event) =>{
        const {value, name } = event.target;
        this.setState({[name]:value})
    }
    render(){
        const {googleSignInStart} = this.props;
        return(
            
            <SignInContainer>
                <SingInTitle>I already have an account</SingInTitle>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit} >
                    <FormInput name="email"  type="email"  value={this.state.email} handleChange={this.handleChange} label='email' required/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label='password' required/>
                    
                    <ButtonsContainer>
                    <CustomButton type="submit">Sign in</CustomButton> 
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn >Sign in with Google </CustomButton> 
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: ()=> dispatch(googleSignInStart()),
    emailSignInStart: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null, mapDispatchToProps)(SignIn);