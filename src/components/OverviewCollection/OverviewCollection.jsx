import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PreviewCollection from "../PreviewCollection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shopSelectors";

import { OverviewCollectionContainer } from "./OverviewCollectionStyles";

const OverviewCollection = ({ collections }) => (
  <OverviewCollectionContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps} />
    ))}
  </OverviewCollectionContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(OverviewCollection);
