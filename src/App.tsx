import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { routeConfig } from "./routes";

const App = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
