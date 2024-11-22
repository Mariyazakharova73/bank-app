import { RouteProps } from "react-router-dom";
import { HomePage, LoanPage, NotFoundPage } from "../pages";

export enum AppRoutes {
  MAIN = "main",
  LOAN = "loan",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
  [AppRoutes.LOAN]: {
    path: RoutePath.loan,
    element: <LoanPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
