import { Outlet } from "react-router";

import Header from "./Header.jsx";

function Layout({ cityId, onCityChange }) {
  return (
    <div className="app">
      <Header cityId={cityId} onCityChange={onCityChange} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
