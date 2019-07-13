import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./PreviewItem.scss";

const PreviewItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted> Add to cart </CustomButton>
  </div>
);

export default PreviewItem;
