import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AppRoutes, getAvailableRoutes, routeConfig } from "./routes";
import { useScoringStore } from "./store/ScoringStore";

const App = () => {
  const { getAppStatus, appId, appStatus } = useScoringStore();

  const availableRoutes = getAvailableRoutes(appStatus?.status || null);

  useEffect(() => {
    if (!appId) return;
    getAppStatus(appId);
  }, [appId, getAppStatus]);

  console.log("history: ", appStatus?.statusHistory);
  console.log("appStatus: ", appStatus?.status);

  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.entries(routeConfig)
            .filter(([routeKey]) => availableRoutes.includes(routeKey as AppRoutes))
            .map(([key, route]) => (
              <Route
                key={key}
                path={route.path}
                element={route.element}
              />
            ))}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
