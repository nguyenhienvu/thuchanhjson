import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";
import { jwtDecode } from 'jwt-decode';

function Dashboard() {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const decoded = jwtDecode(token);
    const email = decoded.email
    
    

    // Kiểm tra token khi vào trang
    useEffect(() => {
        
        

        if (!token) {
            // Nếu không có token, chuyển hướng về trang đăng nhập
            navigate('/login');
        }
    }, [navigate]);

 

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", textAlign: "center" }}>
            <h2>TRANG ĐIỀU HÀNH</h2>
            <p>Chào mừng bạn đã đăng nhập!</p>
            <p>{email}</p>
            {/* Thêm 3 nút */}
            <div style={{ margin: "20px 0" }}>
                <button
                    onClick={() => handleNavigate('/player')}
                    style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                >
                    Người chơi
                </button>
                <button
                    onClick={() => handleNavigate('/staff')}
                    style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                >
                    Nhân viên
                </button>
                <button
                    onClick={() => handleNavigate('/admin')}
                    style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }}
                >
                    Quản trị
                </button>
                <Logout />
            </div>
        </div>
    );
}

export default Dashboard;