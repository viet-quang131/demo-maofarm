import { Routes, Route } from "react-router-dom";
import LayoutAdmin from "./components/layouts/LayoutAdmin";

import AdminProductAdd from "./pages/add";
import AdminProductEdit from "./pages/edit";
import AdminProduct from "./pages";
import LayoutWebsite from "./components/layouts/LayoutWebsite";
import AdminUser from "./pages/user";
import Page1 from "./pages/home/page1";
import Page2 from "./pages/home/page2";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
            path="/"
            element={<Page2 />}
          />
      </Routes>
    </div>
  );
};
export default App;
