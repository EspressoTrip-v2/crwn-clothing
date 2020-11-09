import React, {useEffect} from 'react';

/* CONTAINER COMPONENTS */
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

/* ROUTER MODULES */
import {Route} from 'react-router-dom';

/* SELECTORS */
import {connect} from 'react-redux';

/* REDUX ACTIONS */
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


const ShopPage =({fetchCollectionsStart, match})=>{
    
   useEffect(()=>{  
       console.log('Fired')
       fetchCollectionsStart()    
   },[fetchCollectionsStart]) 
    
    return ( 
        <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>)        
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);