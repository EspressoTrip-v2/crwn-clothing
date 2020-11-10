import React from 'react';

import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

// import CustomButton from '../custom-button/custom-button.component'

/* STYLED COMPONENTS */
import {CollectionItemContainer, CollectionImageContainer, CollectionFooterContainer, CustomButtonStyled} from './collection-item.styles';

const CollectionItem = ({item, addItem}) =>{
    
    const {imageUrl, name, price} = item;
    
    return(
    
    <CollectionItemContainer>
        <CollectionImageContainer className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
        <CollectionFooterContainer>
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </CollectionFooterContainer>
        <CustomButtonStyled onClick={() =>addItem(item)} inverted>Add to cart</CustomButtonStyled>
    </CollectionItemContainer>
)}

const mapDispatchToProps = (dispatch) =>({
    addItem: item=>dispatch(addItem(item))
})


export default connect(null,mapDispatchToProps)(CollectionItem);