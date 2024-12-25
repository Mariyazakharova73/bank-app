import * as Yup from "yup";

export const prescoringValidationSchema = Yup.object().shape({
  lastName: Yup.string()
    .required("Enter your last name")
    .min(2, "Last name must be at least 2 characters")
    .max(30, "Last name cannot exceed 30 characters")
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters of the Latin alphabet"),
  firstName: Yup.string()
    .required("Enter your first name")
    .min(2, "First name must be at least 2 characters")
    .max(30, "First name cannot exceed 30 characters")
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters of the Latin alphabet"),
  middleName: Yup.string()
    .required("Enter your patronymic")
    .min(2, "Middle name must be at least 2 characters")
    .max(30, "Middle name cannot exceed 30 characters")
    .matches(/^[A-Za-z]+$/, "Last name must contain only letters of the Latin alphabet"),
  term: Yup.number().required("Select term"),
  email: Yup.string().email("Incorrect email address").required("Enter your email"),
  birthdate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Incorrect date of birth. Use format YYYY-MM-DD")
    .test("is-adult", "You must be at least 18 years old", (value) => {
      if (!value) return true;
      const [year, month, day] = value.split("-").map(Number);
      const birthdate = new Date(year, month - 1, day);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      const dayDiff = today.getDate() - birthdate.getDate();
      return age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
    })
    .required("Enter your date of birth"),
  passportSeries: Yup.string()
    .required("Enter your passport series")
    .matches(/^\d{4}$/, "The series must be 4 digits"),
  passportNumber: Yup.string()
    .required("Enter your passport number")
    .matches(/^\d{6}$/, "The number must be 6 digits"),
  amount: Yup.number()
    .required("Enter amount")
    .min(10000, "The minimum amount is 10000")
    .max(1000000, "The maximum amount is 1000000")
    .typeError("Amount must be a number"),
});
