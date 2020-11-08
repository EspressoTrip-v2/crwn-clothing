import React from 'react';

/* CONTAINER COMPONENTS */
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

/* ROUTER MODULES */
import {Route} from 'react-router-dom';

/* SELECTORS */
import {connect} from 'react-redux';

/* REDUX ACTIONS */
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';


class ShopPage extends React.Component{
    
    componentDidMount() {

     const {fetchCollectionsStart} = this.props;
     
     /* RUN ACTION TO PASS TO THUNK MIDDLEWARE */
        fetchCollectionsStart()    
    }
    
    render() {
        const {match} = this.props;
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>)   
    }   
}


const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: ()=> dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);