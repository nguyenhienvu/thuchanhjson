import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";
import { jwtDecode } from "jwt-decode";
import axiosClient from "../config/axiosClient";

function Dashboard() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("Đang tải...");
    const [user, setUser] = useState();

    // Hàm kiểm tra token và gọi API xác thực
    const verifyToken = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            navigate("/login");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            setEmail(decoded.email || "Không xác định");
            setUser(decoded.user);

        } catch (error) {
            console.error("Lỗi xác thực token:", error);
            navigate("/login");
        }
    };

    useEffect(() => {
        verifyToken();
    }, [navigate]);

    const handleNavigate = (path) => {
        navigate(path);
    };

    if (user == 'admin') {
        return (
            <div>
                <div style={{ maxWidth: "600px", margin: "200px auto", padding: "20px", textAlign: "center" }}>
                    <h2>TRANG ĐIỀU HÀNH</h2>
                    <p>Chào mừng bạn đã đăng nhập!</p>
                    <p>{email}</p>
                    <div style={{ margin: "20px 0" }}>
                        <button
                            onClick={() => handleNavigate("/player-create")}
                            style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                        >
                            Người chơi
                        </button>
                        <button
                            onClick={() => handleNavigate("/staff")}
                            style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                        >
                            Nhân viên
                        </button>
                        <button
                            onClick={() => handleNavigate("/admin")}
                            style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                        >
                            Quản trị
                        </button>
                        <Logout />
                    </div>
                </div>
            </div>
        )
    };
}

export default Dashboard;