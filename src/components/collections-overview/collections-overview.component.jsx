import React from 'react';

/* REACT COMPONENTS */
import {connect} from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component'

/* SELECTORS */
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';

/* STYLED COMPONENTS */
import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionsOverview = ({collections})=>(
    <CollectionsOverviewContainer>
        { 
            collections.map(({id,...otherCollectionProps})=>( 
                <CollectionPreview key={id} {...otherCollectionProps}/> 
            ))
        }
    </CollectionsOverviewContainer>
    
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)