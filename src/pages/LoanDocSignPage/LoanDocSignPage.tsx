import { Controller, useForm } from "react-hook-form";
import Doc from "../../assets/doc/credit-card-offer.pdf";
import Button, { BtnRadius } from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import Loader from "../../components/Loader/Loader";
import PDFDownloadButton from "../../components/PDFDownloadButton/PDFDownloadButton";
import SignStatus from "../../components/SignStatus/SignStatus";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import "./LoanDocSignPage.scss";

const LoanDocSignPage = () => {
  const { appId } = useScoringStore();
  const { signDocs, loading, error, signSuccess } = useDocStore();

  interface FormValues {
    sign: boolean;
  }

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid },
  } = useForm({
    defaultValues: {
      sign: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!appId) {
      return;
    }
    signDocs(appId);
  };

  if (loading.signDocs)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  if (error.signDocs)
    return (
      <div className="error">
        <p>{error.signDocs}</p>
      </div>
    );

  return (
    <main className="container">
      {signSuccess ? (
        <SignStatus />
      ) : (
        <section className="doc-sign">
          <div className="doc-sign__header">
            <h2 className="doc-sign__title">Signing of documents</h2>
            <p className="doc-sign__step">Step 4 of 5</p>
          </div>
          <p className="doc-sign__text">
            Information on interest rates under bank deposit agreements with individuals. Center for Corporate
            Information Disclosure. Information of a professional participant in the securities market.
            Information about persons under whose control or significant influence the Partner Banks are. By
            leaving an application, you agree to the processing of personal data, obtaining information,
            obtaining access to a credit history, using an analogue of a handwritten signature, an offer, a
            policy regarding the processing of personal data, a form of consent to the processing of personal
            data.
          </p>
          <PDFDownloadButton
            fileName="Information on your card"
            fileUrl={Doc}
          />
          <div className="doc-sign__footer">
            <form
              id="sign-form"
              name="sign-form"
              onSubmit={handleSubmit(onSubmit)}
              className="sign-form"
            >
              <Controller
                name="sign"
                control={control}
                rules={{ required: "You must accept the terms" }}
                render={({ field }) => (
                  <Checkbox
                    {...field}
                    label="I agree"
                  />
                )}
              />
              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                radius={BtnRadius.SMALL}
                className="sign-form__btn"
              >
                {isSubmitting ? "Loading..." : "Send"}
              </Button>
            </form>
          </div>
        </section>
      )}
    </main>
  );
};

export default LoanDocSignPage;
