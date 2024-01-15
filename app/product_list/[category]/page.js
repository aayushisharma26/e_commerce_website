"use client"
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ProductList({ params }) {
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [noProductsMessage, setNoProductsMessage] = useState('');

  const fetchCategoryProducts = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryProducts(res);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [params.category]);

  const applyFilter = () => {
    fetch(`https://fakestoreapi.com/products/category/${params.category}`)
      .then((res) => res.json())
      .then((res) => {
        const filteredProducts = res.filter(
          (product) =>
            (!selectedPrice || product.price >= parseInt(selectedPrice, 10))
        );

        if (filteredProducts.length === 0) {
          setNoProductsMessage('No products found in the selected price range.');
        } else {
          setNoProductsMessage('');
        }

        setCategoryProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const handleCheckboxChange = (value) => {
    setSelectedPrice(value === selectedPrice ? '' : value);
  };

  const generatePriceCheckboxes = () => {
    const checkboxes = [];
    for (let i = 10; i <= 300; i += 10) {
      checkboxes.push(
        <div className="form-check" key={`price${i}`}>
          <input
            className="form-check-input"
            type="checkbox"
            id={`price${i}`}
            checked={selectedPrice === `${i}`}
            onChange={() => handleCheckboxChange(`${i}`)}
          />
          <label className="form-check-label" htmlFor={`price${i}`}>
            Up to ${i}
          </label>
        </div>
      );
    }
    return checkboxes;
  };

  return (
    <div className="container-fluid" style={{ border: "solid 2px blue", width: "100%" }}>
      <div className="row">
        <nav id="sidebar" className="col-md-3" style={{ border: "red 2px solid" }}>
          <div className="mb-3">
            <h1 style={{ borderBottom: "solid 2px black" }}>Filter</h1>

            <div className="mb-3">
              <h4>Price Filters</h4>
              {generatePriceCheckboxes()}
            </div>

            <button className="btn btn-primary" onClick={applyFilter}>
              Apply Filter
            </button>
          </div>
        </nav>

        <main role="main" className="col-md-9 ml-sm-auto col-lg-9">
          <h1 className="text-center">Product List - {params.category}</h1>

          {noProductsMessage && (
            <div className="alert alert-info" role="alert">
              {noProductsMessage}
            </div>
          )}

          {categoryProducts.reduce((rows, product, index) => {
            if (index % 3 === 0) {
              rows.push([]);
            }
            rows[rows.length - 1].push(product);
            return rows;
          }, []).map((row, rowIndex) => (
            <div key={rowIndex} className="row" style={{ borderBottom: "solid 2px black" }}>
              {row.map((product) => (
                <div key={product.id} className="col-md-4 mb-4">
                  <div style={{ borderRadius: '8px', width: "500px", height: "500px", textAlign: 'center' }}>
                    <Link href={`/product/${product.id}`} passHref>
                      <img src={product.image} alt={product.title} style={{ width: '400px', height: '400px', marginTop: "40px" }} />
                    </Link>
                    <div className="p-3" style={{ marginLeft: "100px" }}>
                      <p>Price: ${product.price}</p>
                      <p>ID: {product.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
