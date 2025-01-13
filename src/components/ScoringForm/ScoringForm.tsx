import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useScoringStore } from "../../store/ScoringStore";
import { ScoringFormValues } from "../../types/types";
import {
  defaultValuesScoring,
  EMPLOYMENT_FIELDS,
  PASSPORT_DATA,
  SCORING_SELECT_FIELDS,
} from "../../utils/constants/loanAppId";
import { scoringValidation } from "../../utils/scoringValidation";
import Button, { BtnRadius } from "../Button/Button";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Loader from "../Loader/Loader";
import Select from "../Select/Select";
import "./ScoringForm.scss";

const ScoringForm = () => {
  const { submitScoring, loading, error } = useScoringStore();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultValuesScoring,
    resolver: yupResolver(scoringValidation),
  });

  const onSubmit = async (data: ScoringFormValues) => {
    try {
      submitScoring(data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  if (loading.submitScoring)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  if (error.submitScoring)
    return (
      <div className="error">
        <p>{error.submitScoring}</p>
      </div>
    );

  return (
    <form
      id="scoring-form"
      name="scoring-form"
      onSubmit={handleSubmit(onSubmit)}
      className="scoring-form"
    >
      <div className="scoring-form__header">
        <div>
          <div className="scoring-form__title-wrapper">
            <h2 className="scoring-form__title">Continuation of the application</h2>
            <p className="scoring-form__step">Step 2 of 5</p>
          </div>
        </div>
      </div>
      <div className="scoring-form__info-wrapper">
        <div className="scoring-form__select-fields">
          {SCORING_SELECT_FIELDS.map((item) => (
            <div key={item.name}>
              <Label
                isRequired={item.isRequired}
                htmlFor={item.name}
              >
                {item.label}
              </Label>
              <Controller
                name={item.name}
                control={control}
                render={({ field, fieldState }) => (
                  <Select
                    {...field}
                    options={item.options}
                    error={fieldState.error?.message}
                  />
                )}
              />
            </div>
          ))}
        </div>
        <div className="scoring-form__passport-fields">
          {PASSPORT_DATA.map((item) => (
            <div key={item.name}>
              <Label
                isRequired={item.isRequired}
                htmlFor={item.name}
              >
                {item.label}
              </Label>
              <Controller
                name={item.name}
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    placeholder={item.placeholder}
                    value={field.value}
                    error={fieldState.error?.message}
                    isTouched={fieldState.isTouched}
                    isValid={fieldState.isTouched && !fieldState.error && Boolean(field.value)}
                    type={item.inputType}
                  />
                )}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="scoring-form__content">
        <p className="scoring-form__content-title">Employment</p>
        <div>
          <div className="scoring-form__fields">
            <div className="scoring-form__grid">
              {EMPLOYMENT_FIELDS.map(({ type, label, name, placeholder, isRequired, inputType, options }) => (
                <div key={name}>
                  <Label
                    isRequired={isRequired}
                    htmlFor={name}
                  >
                    {label}
                  </Label>
                  <Controller
                    name={name}
                    control={control}
                    render={({ field, fieldState }) =>
                      type === "input" ? (
                        <Input
                          {...field}
                          placeholder={placeholder}
                          value={field.value}
                          error={fieldState.error?.message}
                          isTouched={fieldState.isTouched}
                          isValid={fieldState.isTouched && !fieldState.error && Boolean(field.value)}
                          type={inputType}
                        />
                      ) : type === "select" ? (
                        <Select
                          {...field}
                          options={options || []}
                          error={fieldState.error?.message}
                        />
                      ) : (
                        <div></div>
                      )
                    }
                  />
                </div>
              ))}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              radius={BtnRadius.SMALL}
              className="scoring-form__btn"
            >
              {isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ScoringForm;
