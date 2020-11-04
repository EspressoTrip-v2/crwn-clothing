import React from 'react';

/* MENU ITEM IMPORT */
import MenuItem from '../menu-item/menu-item.component';

/* REDUX MODULES */
import {connect} from 'react-redux';

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector'

/* STYLED COMPONENTS */
import {DirectoryMenuContainer} from './directory.styles';


const Directory = ({sections})=>(
  
  
<DirectoryMenuContainer>
    {
        /* LOOP THROUGH STATE TO CREATE MENU ITEMS */
    sections.map(({id, ...otherSectionProps}) =>(<MenuItem key={id} {...otherSectionProps} />))
    
    } 
</DirectoryMenuContainer>   

  
)

const mapStateToProps = createStructuredSelector({sections:selectDirectorySections})

export default connect(mapStateToProps)(Directory);