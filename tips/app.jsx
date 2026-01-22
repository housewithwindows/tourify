import React, { useState, useEffect } from "react";

function PageTitle() {
  const [products, setProducts] = useState(null);

  // console.log("rerender");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Dependencies array - დამოკიდებულებების მასივი

  return (
    <div>
      {products !== null ? (
        <ul>
          {products.map((product) => (
            <li key={product.title}>
              {product.title} - {product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Products is loading...</p>
      )}
    </div>
  );
}

export default PageTitle;