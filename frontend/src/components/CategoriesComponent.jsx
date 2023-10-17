import React from "react";

const CategoriesComponent = ({ tags }) => {
  return (
    <>
      <h2>Categories</h2>
      {tags &&
        tags.map((tag, index) => {
          return <p key={index}>{tag}</p>;
        })}
    </>
  );
};

export default CategoriesComponent;
