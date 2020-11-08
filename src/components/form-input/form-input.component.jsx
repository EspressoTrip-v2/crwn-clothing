import React from 'react';

/* STYLED COMPONENTS */
import {GroupContainer, FormInputContainer, FormInputLab} from './form-input.styles';

const FormInput = ({handleChange,label,...otherProps })=>(
    
<GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {
    label? (<FormInputLab className={`${otherProps.value.length ? 'shrink': ''} form-input-label`}>{label}</FormInputLab>) : null
     }
</GroupContainer>       
)

export default FormInput;