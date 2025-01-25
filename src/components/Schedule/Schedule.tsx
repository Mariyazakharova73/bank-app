import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../routes";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import { BTN_DENY_COLOR } from "../../utils/constants/constants";
import Button, { BtnRadius } from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import ScheduleModalContent from "../ScheduleModalContent/ScheduleModalContent";
import Tables from "../Tables/Tables";
import "./Schedule.scss";
const Schedule = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

  const { appId } = useScoringStore();
  const { createDocuments, loading, error } = useDocStore();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      agreement: false,
    },
    mode: "onChange",
  });

  const onSubmit = async () => {
    if (!appId) return;
    createDocuments(appId);
  };

  const closeModal = () => {
    setModalOpen(false);
    if (modalStep === 2) {
      navigate(RoutePath.main);
    }
  };

  const handleCloseClick = () => {
    setModalOpen(false);
    if (modalStep === 2) {
      navigate(RoutePath.main);
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  if (loading.createDocuments)
    return (
      <div className="loading" data-testid="loader">
        <Loader />
      </div>
    );

  if (error.createDocuments)
    return (
      <div className="error">
        <p>{error.createDocuments}</p>
      </div>
    );

  return (
    <div className="schedule">
      <div className="schedule__content">
        <div className="schedule__header">
          <h2 className="schedule__title">Payment Schedule</h2>
          <p className="schedule__step">Step 3 of 5</p>
        </div>
        <Modal
          title="Deny application"
          isOpen={isModalOpen}
          onClose={handleCloseClick}
        >
          <ScheduleModalContent
            modalStep={modalStep}
            setModalStep={setModalStep}
            onClose={closeModal}
          />
        </Modal>
        <Tables />
        <div className="schedule__footer">
          <Button
            className="schedule__btn"
            color={BTN_DENY_COLOR}
            radius={BtnRadius.SMALL}
            onClick={openModal}
          >
            Deny
          </Button>
          <form
            id="schedule-form"
            name="schedule-form"
            onSubmit={handleSubmit(onSubmit)}
            className="schedule__form"
          >
            <Controller
              name="agreement"
              control={control}
              rules={{ required: "You must accept the terms" }}
              render={({ field }) => (
                <Checkbox
                  {...field}
                  label="I agree with the payment schedule"
                />
              )}
            />
            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              radius={BtnRadius.SMALL}
              className="schedule__btn"
            >
              {isSubmitting ? "Loading..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
