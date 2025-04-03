import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralRoutes from "./routes/General";
import AdminRoutes from "./routes/AdminRoutes";
import '@css/base.css';

// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS





function App() {
  return (
    <BrowserRouter>
      {/* Url chung */}
      <GeneralRoutes />

      {/* Url admin */}
      <AdminRoutes />

    </BrowserRouter>
  );
}



export default App;