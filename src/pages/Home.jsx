import Card from "../Components/Card";
import "./Home.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";


function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sample-e-1.onrender.com/product/getproducts")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
  return (
    <div className="loader-container">
      <TailSpin
        height="80"
        width="80"
        color="#7C3AED"
        ariaLabel="loading"
      />
    </div>
  );
}

  return (
    <div className="home">
      {products.map((product) => (
        <Card
          key={product._id || product.id}
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