"use client"
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = ({ handleFilterChange, handleSortChange, getCategoryOptions, getPriceRangeOptions }) => (
  <div className="sidebar">
    <label>
      Category:
      <select className="form-control" onChange={(e) => handleFilterChange('category', e.target.value)}>
        {getCategoryOptions().map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>

    <label>
      Price Range:
      <select className="form-control" onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
        {getPriceRangeOptions().map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>

    <button className="btn btn-primary" onClick={handleSortChange}>Sort Price</button>
  </div>
);

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    priceRange: '',
  });
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterMessage, setFilterMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType, value) => {
    if (value === 'All') {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: '',
      }));
    } else {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        [filterType]: value,
      }));
    }
  };

  const handleSortChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  useEffect(() => {
    let filtered = products;

    if (selectedFilters.category) {
      filtered = filtered.filter((product) => product.category === selectedFilters.category);
    }

    if (selectedFilters.priceRange) {
      const [minPrice, maxPrice] = selectedFilters.priceRange.split('-');
      filtered = filtered.filter(
        (product) => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
      );
    }

    filtered.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
    });

    setFilteredProducts(filtered);

    if (filtered.length === 0) {
      setFilterMessage('No products match the selected criteria.');
    } else {
      setFilterMessage('');
    }
  }, [selectedFilters, products, sortOrder]);

  const getCategoryOptions = () => {
    const categories = [...new Set(filteredProducts.map((product) => product.category))];
    return ['All', ...categories];
  };

  const getPriceRangeOptions = () => {
    const prices = [...new Set(filteredProducts.map((product) => product.price))];
    const options = ['All'];

    for (let i = 0; i <= Math.max(...prices); i += 10) {
      const range = `${i}-${i + 10}`;
      options.push(range);
    }

    return options;
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-3">
          <Sidebar
            handleFilterChange={handleFilterChange}
            handleSortChange={handleSortChange}
            getCategoryOptions={getCategoryOptions}
            getPriceRangeOptions={getPriceRangeOptions}
          />
        </div>
        <div className="col-md-9">
          {filterMessage && <p className="alert alert-warning">{filterMessage}</p>}
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text">Price: ${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
