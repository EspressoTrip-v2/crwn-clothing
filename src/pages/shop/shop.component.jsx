import React from 'react';

/* REACT COMPONENTS */
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* CONTAINER COMPONENTS */
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

/* ROUTER MODULES */
import {Route} from 'react-router-dom';


/* SELECTORS */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

/* REDUX ACTIONS */
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';

/* SPINNER WRAPPED COMPONENTS */
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends React.Component{
    
    componentDidMount() {
        // console.log('Mount',Date.now())
     const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync()
        
    }
    
    render() {
        const {match,isCollectionsLoaded} = this.props;
        // console.log("Render",Date.now())

        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} render={props =><CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} />
            </div>) 
        
        
    }
    
    
    
}

const mapStateToProps = createStructuredSelector({
    isCollectionsLoaded: selectIsCollectionsLoaded
 })


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())

})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);