import React from "react";

const CategoriesComponent = ({ header, tags }) => {
  return (
    <>
      {header && <h2>Categories</h2>}
      {tags &&
        tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
    </>
  );
};

export default CategoriesComponent;
