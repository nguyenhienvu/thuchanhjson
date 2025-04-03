import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); //reset message
        try {
            const response = await axios.post('http://localhost:8000/api/login/', {
                email: email,
                password: password
            });
            setMessage(response.data.message);
            if (response.data.success) {
                // Lưu token vào localStorage
                localStorage.setItem('accessToken', response.data.access);
                localStorage.setItem('refreshToken', response.data.refresh);
                navigate('/dashboard');
            }
        }
        catch (error) {
            setMessage(error.response?.data?.message || 'Lỗi đăng nhập');
        }

    };

    return (
        <div style={{ maxWidth: "400px", margin: " 200px auto", padding: "20px", textAlign: "center" }}>
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ width: "200px", padding: "8px" }}
                    />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ width: "200px", padding: "8px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Đăng Nhập
                </button>
            </form>
            {<p>{message}</p>}
        </div>
    );
}

export default Login;
