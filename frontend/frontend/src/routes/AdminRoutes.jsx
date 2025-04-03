import { Routes, Route } from "react-router-dom";


import PlayerCreate from "../pages/PlayerCreate";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/player-create" element={<PlayerCreate />} />
    </Routes>
  );
};

export default AdminRoutes;