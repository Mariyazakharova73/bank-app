import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { submitInfo } from "../../api/mainApi";
import { FormFields, InfoFormValues } from "../../types/types";
import { defaultValues, FORM_FIELDS, SELECT_TERM_OPTIONS } from "../../utils/constants/credit-card";
import { prescoringValidationSchema } from "../../utils/prescoringValidation";
import Button, { BtnRadius } from "../Button/Button";
import Divider from "../Divider/Divider";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Loader from "../Loader/Loader";
import Select from "../Select/Select";
import "./InformationForm.scss";

const InformationForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(prescoringValidationSchema),
  });

  const onSubmit = async (data: InfoFormValues) => {
    setLoading(true);
    try {
      await submitInfo(data);
    } catch (err) {
      setError("Ошибка при отправке формы");
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  if (error)
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );

  return (
    <form
      id="prescoring-form"
      name="prescoring-form"
      onSubmit={handleSubmit(onSubmit)}
      className="prescoring-form"
    >
      <div className="prescoring-form__header">
        <div>
          <div className="prescoring-form__title-wrapper">
            <h2 className="prescoring-form__title">Customize your card</h2>
            <p className="prescoring-form__step">Step 1 of 5</p>
          </div>

          <div className="prescoring-form__amount">
            {/* <p className="prescoring-form__text">Select amount</p>
            <p className="prescoring-form__number">150 000</p>
            <div className="prescoring-form__slider"></div>
            <div className="prescoring-form__amount-wrapper">
              <p className="prescoring-form__amount-number">15 000</p>
              <p className="prescoring-form__amount-number">600 000</p>
            </div> */}
            <div>
              <Label
                isRequired
                htmlFor={FormFields.AMOUNT}
              >
                Select amount
              </Label>
              <Controller
                name={FormFields.AMOUNT}
                control={control}
                render={({ field, fieldState }) => (
                  <Input
                    {...field}
                    placeholder="10 000 - 1 000 000"
                    value={field.value}
                    error={fieldState.error?.message}
                    isTouched={fieldState.isTouched}
                    isValid={fieldState.isTouched && !fieldState.error && Boolean(field.value)}
                    type="number"
                  />
                )}
              />
            </div>
          </div>
        </div>

        <div className="prescoring-form__divider"></div>

        <div className="prescoring-form__info">
          <p className="prescoring-form__info-title">You have chosen the amount</p>
          <p className="prescoring-form__info-amount">150 000 ₽</p>
          <Divider />
        </div>
      </div>
      <div className="prescoring-form__content">
        <p className="prescoring-form__content-title">Contact Information</p>
        <div>
          <div className="prescoring-form__fields">
            <div className="prescoring-form__grid">
              {FORM_FIELDS.map(({ type, label, name, placeholder, isRequired, inputType }) => (
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
                          options={SELECT_TERM_OPTIONS}
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
              className="prescoring-form__btn"
            >
              {isSubmitting ? "Loading..." : "Continue"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InformationForm;
