import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Productlist() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = () => {
            fetch("http://127.0.0.1:8000/api/products")
                .then(res => res.json())
                .then(response => {
                    console.log(response.products);
                    setProduct(response.products);
                })
                .catch(error => {
                    console.log(error);
                });
        };
        getProduct();
    }, []);

    const deleteProduct = (id) => {
        axios.delete('http://127.0.0.1:8000/api/productdelete/' + id).then(function (response) {
            console.log(response.data);
            alert("Successfully Deleted");
            setProduct(product.filter(p => p.id !== id));
        }).catch(error => {
            console.log(error);
        });
    };

    return (
        <React.Fragment>
            <div className="container container_overflow">
                <div className="row">
                    <div className="col-12">
                        <h5 className="mb-4">Product List</h5>
                        <div className="row">
                            {
                                product.map((pdata, index) => (
                                    <div key={index} className="col-md-4 mb-4">
                                        <div className="card">
                                            <img src={`http://127.0.0.1:8000/storage/${pdata.image}`} className="card-img-top" alt={pdata.name} height={200} style={{ objectFit: 'cover' }} />
                                            <div className="card-body">
                                                <h5 className="card-title text-white">{pdata.name}</h5>
                                                <p className="card-text text-white">{pdata.description}</p>
                                                <Link to={`/editproduct/${pdata.id}/edit`} className="btn btn-success mx-2">Edit</Link>
                                                <button onClick={() => deleteProduct(pdata.id)} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Productlist;
