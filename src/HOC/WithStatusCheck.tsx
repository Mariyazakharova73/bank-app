import { FC, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../routes";
import { useScoringStore } from "../store/ScoringStore";
import { CreditStatus } from "../types/types";
import { LS_KEY_DOCS } from "../utils/constants/constants";

const WithStatusCheck: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const { appStatus, removeAppId } = useScoringStore();

  useEffect(() => {
    if (appStatus?.status === CreditStatus.CREDIT_ISSUED) {
      removeAppId();
      localStorage.removeItem(LS_KEY_DOCS);
      navigate(RoutePath.loan);
    }

    if (appStatus?.status === CreditStatus.CLIENT_DENIED) {
      removeAppId();
    }
  }, [navigate, appStatus?.code, appStatus?.status, removeAppId]);

  return <>{children}</>;
};

export default WithStatusCheck;
