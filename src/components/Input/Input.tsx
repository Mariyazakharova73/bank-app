import { ChangeEventHandler, forwardRef, InputHTMLAttributes } from "react";
import "./Input.scss";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  isTouched?: boolean;
  isValid?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, isTouched, isValid, onChange, type = "text", name, ...props }, ref) => {
    const inputClass = `input ${error ? "input--error" : isValid ? "input--success" : ""}`;

    const circleClass = `input-wrapper__circle ${
      error ? "input-wrapper__circle--error" : isValid ? "input-wrapper__circle--success" : ""
    }`;

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      const trimmedValue = e.target.value.trim();
      if (onChange) {
        onChange({ ...e, target: { ...e.target, value: trimmedValue } });
      }
    };

    return (
      <div className="input-wrapper">
        <input
          {...props}
          ref={ref}
          className={inputClass}
          onChange={handleChange}
          type={type}
        />
        <div
          className={circleClass}
          role="presentation"
        ></div>
        {error && <p className="input-wrapper__error-message">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
