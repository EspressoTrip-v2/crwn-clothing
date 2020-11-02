import React from 'react';
import './directory.styles.scss'

/* MENU ITEM IMPORT */
import MenuItem from '../menu-item/menu-item.component';

/* REDUX MODULES */
import {connect} from 'react-redux';

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/directory.selector'



const Directory = ({sections})=>(
  
  
<div className="directory-menu">
    {
        /* LOOP THROUGH STATE TO CREATE MENU ITEMS */
    sections.map(({id, ...otherSectionProps}) =>(<MenuItem key={id} {...otherSectionProps} />))
    
    } 
</div>   

  
)

const mapStateToProps = createStructuredSelector({sections:selectDirectorySections})

export default connect(mapStateToProps)(Directory);