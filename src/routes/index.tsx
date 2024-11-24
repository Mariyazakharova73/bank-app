import { RouteProps } from "react-router-dom";
import { LoanPage, NotFoundPage } from "../pages";
import HomePage from "../pages/HomePage/HomePage";

export enum AppRoutes {
  MAIN = "main",
  CREDIT_CARD = "credit",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.CREDIT_CARD]: "/credit",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
  [AppRoutes.CREDIT_CARD]: {
    path: RoutePath.credit,
    element: <LoanPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
