
/* REACT COMPONENTS*/
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* SELECTORS */
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selector';

/* REDUX */
import {connect} from 'react-redux';


const mapStateToProps = createStructuredSelector({
    isLoading: (state)=>!selectIsCollectionsLoaded(state)
 })
 
const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;