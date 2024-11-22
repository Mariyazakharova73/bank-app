import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { routeConfig } from "./routes";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routeConfig).map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default App;
