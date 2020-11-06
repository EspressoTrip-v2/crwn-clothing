
/* REACT COMPONENTS */
import {connect} from 'react-redux'
import {compose} from 'redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

/* SELECTORS */
import {selectIsCollectionFetching} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';


/* MAKE SURE PROP NAME IS MATCHING WHAT WITHSPINNER REQUIRES BECAUSE WE FEED IT DIRECTLY */
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching,
 })
 

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;

