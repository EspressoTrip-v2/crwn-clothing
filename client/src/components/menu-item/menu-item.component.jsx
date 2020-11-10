import React from 'react';

import {withRouter} from 'react-router-dom'

/* STYLED COMPONENTS */
import {MenuItemContainer, BackGroundImageContainer, ContentContainer} from './menu-item.styles'


const MenuItem = ({title, imageUrl, size, history,match, linkUrl})=>{
    return(
<MenuItemContainer size={size} onClick={() =>history.push(`${match.url}${linkUrl}`)} >
        <BackGroundImageContainer imageUrl={imageUrl} className="background-image"/>
    <ContentContainer>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop Now</span>
    </ContentContainer>
</MenuItemContainer> 
)}

export default withRouter(MenuItem);