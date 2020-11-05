import React from 'react';

/* IMPORT ROUTER */
import {withRouter} from 'react-router-dom';

/* REACT COMPONENTS */
import CollectionItem from '../collection-item/colllection-item.component'

/* STYLED COMPONENTS */
import {CollectionPreviewContainer, PreviewContainer, PreviewTitle} from './collection-preview.styles';

const CollectionPreview = ({routeName, title, items, match}) =>{

    return(
    <CollectionPreviewContainer>
        <PreviewTitle to={`${match.path}/${routeName}`} >{title.toUpperCase()}</PreviewTitle>
        <PreviewContainer>
            {
                /* ONLY SEND THE FIRST 4 ITEMS TO RENDER */
                items.filter((item,idx) => idx < 4).map((item) =>(
                    
                <CollectionItem key={item.id} item={item}/> 
                    
                ))
                
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
    
)}

export default withRouter(CollectionPreview);