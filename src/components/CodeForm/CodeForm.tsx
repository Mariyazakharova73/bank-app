import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDocStore } from "../../store/DocStore";
import { useScoringStore } from "../../store/ScoringStore";
import Loader from "../Loader/Loader";
import "./CodeForm.scss";

interface FormValues {
  code: string[];
}

const CodeForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      code: ["", "", "", ""],
    },
  });

  const { sendSESCode, loading } = useDocStore();
  const { appId, appStatus, getAppStatus } = useScoringStore();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    const code = data.code.join("");

    if (appStatus?.sesCode === data.code.join("")) {
      if (!appId || !code) return;
      sendSESCode(appId, Number(code));
    } else {
      setError("Invalid confirmation code");
    }
  };

  const focusNextInput = (currentIndex: number, e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(`code.${currentIndex}`, value);

    if (value.length === 1) {
      if (currentIndex < 3) {
        const nextInput = document.getElementById(`input-${currentIndex + 1}`);
        if (nextInput) (nextInput as HTMLInputElement).focus();
      } else {
        handleSubmit(onSubmit)();
      }
    }
  };

  const handleBackspace = (currentIndex: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && getValues(`code.${currentIndex}`) === "" && currentIndex > 0) {
      const prevInput = document.getElementById(`input-${currentIndex - 1}`);
      if (prevInput) (prevInput as HTMLInputElement).focus();
    }
  };

  useEffect(() => {
    if (!appId) return;
    getAppStatus(appId);
  }, [appId, getAppStatus]);

  if (loading.sendSESCode)
    return (
      <div className="loading">
        <Loader />
      </div>
    );

  return (
    <form
      id="code-form"
      name="code-form"
      onSubmit={handleSubmit(onSubmit)}
      className="code-form"
    >
      <h2 className="code-form__title">Please enter confirmation code</h2>
      <div className="code-form__inputs">
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Controller
              key={index}
              name={`code.${index}`}
              control={control}
              render={({ field }) => (
                <input
                  placeholder=""
                  {...field}
                  id={`input-${index}`}
                  maxLength={1}
                  onChange={(e) => focusNextInput(index, e)}
                  onKeyDown={(e) => handleBackspace(index, e)}
                  className="code-form__input"
                />
              )}
            />
          ))}
      </div>
      {error && <p className="code-form__error">{error}</p>}
    </form>
  );
};

export default CodeForm;
