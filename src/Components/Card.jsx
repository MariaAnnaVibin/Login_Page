import "./Card.css";
import { motion } from "motion/react"


function Card({ name, price, description, image }) {
    return (
        <motion.div className="card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <img src={"https://sample-e-1.onrender.com/" + image} alt="" />
            <h2>{name}</h2>
            <h3>₹{price}</h3>
            <p>{description}</p>


            <button className="buy-btn">
                View Product
            </button>
        </motion.div>
    );
}

export default Card;