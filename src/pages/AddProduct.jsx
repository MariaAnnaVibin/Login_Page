import React, { useState } from 'react';
import './Product.css'
import axios from "axios";

function AddProduct() {

    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
        category: '',
        stock: '',
    });

    const [image, setImage] = useState(null);

    const handlechange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("name", product.name);
        formData.append("price", product.price);
        formData.append("description", product.description);
        formData.append("category", product.category);
        formData.append("stock", product.stock);
        if (image) formData.append("image", image)




        try {
            const response = await axios.post("https://sample-e-1.onrender.com/product/addproduct",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log("Success:", response.data);
            alert("Product Added Successfully!");
        } catch (err) {
            console.log("Error:", err.response?.data || err.message);
        }

    };

    return (

        <div className="container">
            <form className="product-form" onSubmit={handleSubmit}>
                <h2>Add Product</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={product.name}
                    onChange={handlechange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={product.price}
                    onChange={handlechange}
                    required
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    value={product.description}
                    onChange={handlechange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Product Category"
                    value={product.category}
                    onChange={handlechange}
                    required
                />

                <input
                    type="number"
                    name="stock"
                    placeholder="Product Stock"
                    value={product.stock}
                    onChange={handlechange}
                    required
                />

                <input
                    type="file"
                    name="file"
                    onChange={handleImageChange}
                    required
                />

                <button type="submit">
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default AddProduct;