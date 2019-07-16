import React from "react";
import { Route } from "react-router-dom";

import OverviewCollection from "../../components/OverviewCollection/OverviewCollection";
import CollectionPage from "../CollectionPage/CollectionPage";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={OverviewCollection} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
