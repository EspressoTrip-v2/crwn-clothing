import React from 'react';

/* STYLED COMPONENTS */
import {SpinnerOverlay, SpinnerContainer} from './with-spinner.styles';


const WithSpinner = WrappedComponent => ({isLoading, ...otherProps}) =>{

    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
        ): (<WrappedComponent {...otherProps}/>)
    
}

export default WithSpinner;