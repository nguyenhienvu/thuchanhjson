import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/login');
    };

    return (
        <button onClick={handleLogout} style={{ padding: "10px 20px", margin: "0 10px", cursor: "pointer" }} >
            Đăng Xuất
        </button>
    );
};

export default Logout;