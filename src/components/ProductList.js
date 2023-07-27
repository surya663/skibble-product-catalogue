import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Style.css";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const fetch = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      console.log("Error fetching data. Please try again later.");
    }
  };

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-5">
        {products.map((item) => {
          return (
            <div className="col">
              <div className="card h-100">
                <img src={item.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="price">Price : {item.price}</p>
                  <p className="discount">
                    Discount : {item.discountPercentage}%
                  </p>
                  <p className="rating">Rating : {item.rating}</p>
                  <p className="stock">Stock : {item.stock}</p>
                  <button className="cart">Add To Cart </button>
                  <button className="cart-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ProductList;
