import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { selectCollections } from "../../redux/shop/shopSelectors";

import "./OverviewCollection.scss";

const OverviewCollection = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(OverviewCollection);
