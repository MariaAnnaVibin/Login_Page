import "./Card.css";

function Card({ name, price, description,image }) {
    return (
        <div className="card">
            <img src={"https://sample-e-1.onrender.com/"+image} alt="" />

            <h2>{name}</h2>
            <h3>₹{price}</h3>
            <p>{description}</p>


            <button className="buy-btn">
                View Product
            </button>
        </div>
    );
}

export default Card;