import { forwardRef } from "react";
import "./Checkbox.scss";

interface CheckboxProps {
  value: boolean;
  onChange: (value: boolean) => void;
  onBlur?: () => void;
  name: string;
  label?: string;
  error?: string;
  className?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ value, onChange, onBlur, name, label, error, className }, ref) => {
    return (
      <div className={`checkbox ${className || ""}`}>
        <label className="checkbox__label">
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => onChange(e.target.checked)}
            onBlur={onBlur}
            name={name}
            className="checkbox__input"
            ref={ref}
          />
          <span className="checkbox__custom"></span>
          {label && <span className="checkbox__text">{label}</span>}
        </label>
        {error && <span className="checkbox__error">{error}</span>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
