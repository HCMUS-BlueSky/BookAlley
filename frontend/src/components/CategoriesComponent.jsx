import React from "react";

const CategoriesComponent = ({ tags }) => {
  return (
    <>
      <h2>Categories</h2>
      {tags &&
        tags.map((tag) => {
          return <p>{tag}</p>;
        })}
    </>
  );
};

export default CategoriesComponent;
