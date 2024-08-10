import React from "react";

function Category({ category, onCategoryClick }) {
  const clickHandler = () => {
    onCategoryClick(category);
  };

  return (
    <div
      onClick={clickHandler}
      className="ml-4 cursor-pointer flex items-center w-full bg-white border border-sky-400 gap-3.5 rounded-lg p-4 mb-4 shadow-lg"
    >
      <h3 className="text-lg font-light capitalize">{category}</h3>
    </div>
  );
}

export default Category
