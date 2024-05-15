import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // استخدم useNavigate بدلاً من useHistory
import Header from './Header'; // استيراد مكون الهيدر
import Footer from "./Footer";
function Login({ setLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // استخدم useNavigate للتوجيه

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email,
                password
            });
            console.log("Login successful:", response.data);
            // Update login status to true after successful login
            setLoggedIn(true);
            // Redirect to home page after successful login
            navigate('/');
        } catch (error) {
            setError("Invalid email or password");
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <Header  /> {/* عنوان ورأس الصفحة */}
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h2 className="mb-4"> welcome to MYSTORE ,please Login</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
