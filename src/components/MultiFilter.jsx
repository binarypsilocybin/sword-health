const MultiFilters = ({ filterItem, items }) => {
  const categories = [...new Set(items && items.map((item) => item.category))];

  return (
    <>
      <h3>Categories</h3>
      <div className="filter-container">
        {categories.map((category, index) => (
          <button
            className="btn btn--dark"
            key={index}
            onClick={() => filterItem(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default MultiFilters;
