import React from 'react';

/* REACT COMPONENTS */
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* FIRESTORE */
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

/* ROUTER MODULES */
import {Route} from 'react-router-dom';

/* REDUX MODULES */
import {updateCollections} from '../../redux/shop/shop.actions';

/* SELECTORS */
import {connect} from 'react-redux';

/* SPINNER WRAPPED COMPONENTS */
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{
    
    state = {
        loading: true
    }
    
    unsubscribeFromSnapShot = null;
    
    componentDidMount() {
        const {updateCollections} =this.props;
        
        const collectionRef = firestore.collection('collections');
        
        
        /* FETCH API METHOD */
        /* TOO NESTED FOR THIS CASE */
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-3280a/databases/(default)/documents/collections')
        // .then((response) => response.json())
        // .then(collections =>console.log(collections))
        
        
        /* PROMISE GET METHOD */
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
            this.setState({
                loading: false
            })
        })
        
        
        /* FIREBASE METHOD */
        // this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     updateCollections(collectionsMap)
        //     this.setState({
        //         loading: false
        //     })
        // })
        
 
    }
    
    render() {
        const {match} = this.props;
        const {loading} = this.state
        return (
            <div className="shop-page">
            <Route exact path={`${match.path}`} render={props =><CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={props =><CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>) 
        
        
    }
    
    
    
}

const mapDispatchToProps = (dispatch) => ({
    
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);