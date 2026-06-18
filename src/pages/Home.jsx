import Card from "../Components/Card";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://sample-e-1.onrender.com/product/getproducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="home">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default Home;