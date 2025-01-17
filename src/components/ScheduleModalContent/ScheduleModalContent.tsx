import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes";
import { useScoringStore } from "../../store/ScoringStore";
import { BTN_DENY_COLOR } from "../../utils/constants/constants";
import Button, { BtnRadius } from "../Button/Button";
import Loader from "../Loader/Loader";

interface ScheduleModalContentProps {
  modalStep: number;
  setModalStep: (step: number) => void;
  onClose: () => void;
}

const ScheduleModalContent: React.FC<ScheduleModalContentProps> = ({ modalStep, setModalStep, onClose }) => {
  const navigate = useNavigate();
  const { denyApp, appId, loading, error } = useScoringStore();

  const goToHome = () => {
    onClose();
    navigate(RoutePath.main);
  };

  const onClickDeny = () => {
    setModalStep(2);
    if (!appId) return;
    denyApp(appId);
  };

  if (loading.denyApp)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  if (error.denyApp)
    return (
      <div className="error">
        <p>{error.denyApp}</p>
      </div>
    );

  return (
    <div>
      {modalStep === 1 && (
        <div>
          <p className="schedule__modal-text">You exactly sure, you want to cancel this application?</p>
          <div className="schedule__modal-btns">
            <Button
              className="schedule__btn"
              color={BTN_DENY_COLOR}
              radius={BtnRadius.SMALL}
              onClick={onClickDeny}
            >
              Deny
            </Button>
            <Button
              className="schedule__btn"
              radius={BtnRadius.SMALL}
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      {modalStep === 2 && (
        <div>
          <p className="schedule__modal-text">Your application has been deny!</p>
          <div className="schedule__modal-btns">
            <Button
              className="schedule__btn-home"
              radius={BtnRadius.SMALL}
              onClick={goToHome}
            >
              Go home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleModalContent;
