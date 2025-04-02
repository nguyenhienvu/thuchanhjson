import { Link } from "react-router-dom"
const Home = () => {
    return (
        <div className="Home">
            <Link to={'/login'}><button type="button" class="btn btn-primary">Đăng nhập</button></Link>
        </div>
    )
}
export default Home