// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function Page({ params }){
//     return <div>My Post: {params.category}</div>
// }



// pages/product_list/[category].js
"use client"
import { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: '',
    priceRange: '',
  });
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

  useEffect(() => {
    let filtered = products;

    if (selectedFilters.category) {
      filtered = filtered.filter((product) => product.category === selectedFilters.category);
    }

    if (selectedFilters.priceRange && selectedFilters.priceRange !== 'All') {
      const [minPrice, maxPrice] = selectedFilters.priceRange.split('-');
      filtered = filtered.filter(
        (product) => product.price >= parseInt(minPrice) && product.price <= parseInt(maxPrice)
      );
    }

    setFilteredProducts(filtered);

    if (filtered.length === 0) {
      setFilterMessage('No products match the selected criteria.');
    } else {
      setFilterMessage('');
    }
  }, [selectedFilters, products]);

  const getCategoryOptions = () => {
    const categories = [...new Set(products.map((product) => product.category))];
    return ['All', ...categories];
  };

  const getPriceRangeOptions = () => {
    const prices = [...new Set(products.map((product) => product.price))];
    const options = ['All'];

    for (let i = 0; i <= Math.max(...prices); i += 10) {
      const range = `${i}-${i + 10}`;
      options.push(range);
    }

    return options;
  };

  return (
    <div>
      <div>
        <label>
          Category:
          <select onChange={(e) => handleFilterChange('category', e.target.value)}>
            {getCategoryOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label>
          Price Range:
          <select onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
            {getPriceRangeOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      {filterMessage && <p>{filterMessage}</p>}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div style={{ borderRadius: '8px', border: '1px solid black' }}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
              <div className="p-3">
                <h6>{product.title}</h6>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
