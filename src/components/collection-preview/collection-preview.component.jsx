import React from 'react';

/* REACT COMPONENTS */
import CollectionItem from '../collection-item/colllection-item.component'

/* STYLED COMPONENTS */
import {CollectionPreviewContainer, PreviewContainer} from './collection-preview.styles';

const CollectionPreview = ({title, items}) =>(
    <CollectionPreviewContainer>
        <h1 className="title">{title.toUpperCase()}</h1>
        <PreviewContainer>
            {
                items.filter((item,idx) => idx < 4).map((item) =>(
                    
                <CollectionItem key={item.id} item={item}/> 
                    
                ))
                
            }
        </PreviewContainer>
    </CollectionPreviewContainer>
    
)

export default CollectionPreview;