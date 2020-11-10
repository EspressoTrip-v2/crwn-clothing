import React from 'react';

/* REDUX MODULES */
import {connect} from 'react-redux';

/* SELECTORS */
import {selectCollection} from '../../redux/shop/shop.selector';

/* STYLED COMPONENTS*/
import {CollectionPageContainer, Title, ItemsContainer, CollectionItemStyled} from './collection.styles';


const CollectionPage = ({collection})=>{
   const {title, items} = collection;
    return(
    <CollectionPageContainer>
         <Title>{title}</Title>   
        <ItemsContainer>
           {  
           
           items.map((item)=>( 
           <CollectionItemStyled key={item.id} item={item} /> 
            
           ))
           } 
            
        </ItemsContainer>
     
    </CollectionPageContainer>
    
)}

const mapStateToProps = (state, ownProps) =>{
    return ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})}

export default connect(mapStateToProps)(CollectionPage);