import * as Yup from "yup";

export const scoringValidation = Yup.object().shape({
  gender: Yup.string().required("Select one of the options"),
  maritalStatus: Yup.string().required("Select one of the options"),
  dependentAmount: Yup.string().required("Select one of the options"),

  // Passport data
  passportIssueDate: Yup.string()
    .required("Incorrect date of passport issue date")
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Incorrect date of passport issue date. Use format YYYY-MM-DD"),
  passportIssueBranch: Yup.string()
    .required("The series must be 6 digits")
    .matches(/^\d{6}$/, "The series must be 6 digits"),

  // Employment
  employmentStatus: Yup.string().required("Select one of the options"),

  employerINN: Yup.string()
    .required("Department code must be 12 digits")
    .matches(/^\d{12}$/, "Department code must be 12 digits"),

  salary: Yup.string().required("Enter your salary"),

  position: Yup.string().required("Select one of the options"),

  workExperienceTotal: Yup.string().required("Enter your work experience total"),
  workExperienceCurrent: Yup.string().required("Enter your work experience current"),
});
