import React, { useEffect, lazy, Suspense } from 'react';

/* REACT COMPONENTS */
import Spinner from '../../components/spinner/spinner.component';

/* ROUTER MODULES */
import { Route } from 'react-router-dom';

/* SELECTORS */
import { connect } from 'react-redux';

/* REDUX ACTIONS */
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

/* LAZY LOAD ROUTES */
const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
