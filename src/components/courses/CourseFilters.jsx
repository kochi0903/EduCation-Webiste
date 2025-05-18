import React, { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
const CourseFilters = ({ categories, levels, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    level: "",
    priceRange: [0, 1000],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFilters = {
      ...filters,
      [name]: value,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    const priceIndex = name === "minPrice" ? 0 : 1;

    const newPriceRange = [...filters.priceRange];
    newPriceRange[priceIndex] = Number(value);

    const updatedFilters = {
      ...filters,
      priceRange: newPriceRange,
    };

    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      search: "",
      category: "",
      level: "",
      priceRange: [0, 1000],
    };

    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow-card p-6 mb-8">
      <div className="relative mb-6">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleChange}
          placeholder="Search courses..."
          className="form-input pl-10"
        />
        <FaSearch
          className="absolute left-3 top-3 text-neutral-400"
          size={20}
        />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        className="flex items-center justify-between w-full p-3 bg-neutral-100 rounded-md md:hidden"
        onClick={toggleFilters}
      >
        <span className="font-medium">Filters</span>
        <FaFilter size={20} />
      </button>

      {/* Filter Section */}
      <div className={`mt-6 space-y-6 ${isOpen ? "block" : "hidden md:block"}`}>
        {/* Categories */}
        <div>
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Level */}
        <div>
          <label htmlFor="level" className="form-label">
            Level
          </label>
          <select
            id="level"
            name="level"
            value={filters.level}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">All Levels</option>
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="form-label">Price Range</label>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <input
                type="number"
                name="minPrice"
                min="0"
                max={filters.priceRange[1]}
                value={filters.priceRange[0]}
                onChange={handlePriceChange}
                className="form-input"
                placeholder="Min"
              />
            </div>
            <span className="text-neutral-500">to</span>
            <div className="flex-1">
              <input
                type="number"
                name="maxPrice"
                min={filters.priceRange[0]}
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className="form-input"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button className="btn-outline w-full" onClick={handleReset}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default CourseFilters;
