import { RouteProps } from "react-router-dom";
import WithStatusCheck from "../HOC/WithStatusCheck";
import { LoanPage, NotFoundPage } from "../pages";
import HomePage from "../pages/HomePage/HomePage";
import LoanAppId from "../pages/LoanAppId/LoanAppId";
import LoanCodePage from "../pages/LoanCodePage/LoanCodePage";
import LoanDocSignPage from "../pages/LoanDocSignPage/LoanDocSignPage";
import LoanDocumentPage from "../pages/LoanDocumentPage/LoanDocumentPage";
import { CreditStatus } from "../types/types";

export enum AppRoutes {
  MAIN = "main",
  LOAN = "loan",
  LOAN_DETAIL = "loan_detail",
  LOAN_DOCUMENT = "loan_document",
  LOAN_SIGN = "loan_sign",
  LOAN_CODE = "loan_code",
  NOT_FOUND = "not_found",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.LOAN]: "/loan",
  [AppRoutes.LOAN_DETAIL]: "/loan/:id",
  [AppRoutes.LOAN_DOCUMENT]: "/loan/:id/document",
  [AppRoutes.LOAN_SIGN]: "/loan/:id/document/sign",
  [AppRoutes.LOAN_CODE]: "/loan/:id/code",
  [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<string, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <HomePage />,
  },
  [AppRoutes.LOAN]: {
    path: RoutePath.loan,
    element: (
      <WithStatusCheck>
        <LoanPage />
      </WithStatusCheck>
    ),
  },
  [AppRoutes.LOAN_DETAIL]: {
    path: RoutePath.loan_detail,
    element: (
      <WithStatusCheck>
        <LoanAppId />
      </WithStatusCheck>
    ),
  },
  [AppRoutes.LOAN_DOCUMENT]: {
    path: RoutePath.loan_document,
    element: (
      <WithStatusCheck>
        <LoanDocumentPage />
      </WithStatusCheck>
    ),
  },
  [AppRoutes.LOAN_SIGN]: {
    path: RoutePath.loan_sign,
    element: <LoanDocSignPage />,
  },
  [AppRoutes.LOAN_CODE]: {
    path: RoutePath.loan_code,
    element: (
      <WithStatusCheck>
        <LoanCodePage />
      </WithStatusCheck>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

export const getAvailableRoutes = (status: CreditStatus | null, code?: string | null): AppRoutes[] => {
  const statusToRoutes: Record<string, AppRoutes[]> = {
    [CreditStatus.APPROVED]: [AppRoutes.LOAN_DETAIL],
    [CreditStatus.CC_APPROVED]: [AppRoutes.LOAN_DETAIL, AppRoutes.LOAN_DOCUMENT],
    [CreditStatus.DOCUMENT_CREATED]: [AppRoutes.LOAN_DOCUMENT, AppRoutes.LOAN_SIGN],
    [CreditStatus.CREDIT_ISSUED]: [],
    [CreditStatus.CLIENT_DENIED]: [],
    [CreditStatus.CC_DENIED]: [AppRoutes.LOAN_DETAIL],
  };

  const alwaysAvailableRoutes: AppRoutes[] = [AppRoutes.MAIN, AppRoutes.LOAN, AppRoutes.NOT_FOUND];

  if (status === null) {
    return [...alwaysAvailableRoutes, AppRoutes.LOAN_DETAIL];
  }

  // документы подписаны
  if (status === CreditStatus.DOCUMENT_CREATED && !!code) {
    return [...alwaysAvailableRoutes, AppRoutes.LOAN_SIGN, AppRoutes.LOAN_CODE];
  }

  const dynamicRoutes = statusToRoutes[status] || [];

  return [...alwaysAvailableRoutes, ...dynamicRoutes];
};
