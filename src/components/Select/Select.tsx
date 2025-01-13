import { forwardRef, SelectHTMLAttributes } from "react";
import "./Select.scss";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  error?: string;
  options: { value: string | number; label: string }[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(({ error, options, ...props }, ref) => {
  return (
    <div className="select-wrapper">
      <select
        {...props}
        ref={ref}
        className={`select ${error ? "" : ""} `}
      >
        <option
          value=""
          disabled
          hidden
        ></option>
        {options.map((option) => (
          <option
            className="select__option"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="select-wrapper__error-message">{error}</p>}
    </div>
  );
});

Select.displayName = "Select";

export default Select;
