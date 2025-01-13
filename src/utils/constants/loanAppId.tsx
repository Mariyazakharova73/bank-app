import { ScoringFormFields } from "../../types/types";

export const SCORING_SELECT_FIELDS = [
  {
    type: "select",
    label: "What's your gender",
    name: ScoringFormFields.GENDER,
    isRequired: true,
    options: [
      { label: "Man", value: "MALE" },
      { label: "Woman", value: "FEMALE" },
    ],
  },
  {
    type: "select",
    label: "Your marital status",
    name: ScoringFormFields.MARITAL_STATUS,
    isRequired: true,
    options: [
      { label: "Married", value: "MARRIED" },
      { label: "Divorced", value: "DIVORCED" },
      { label: "Single", value: "SINGLE" },
      { label: "Widow/Widower", value: "WIDOW_WIDOWER" },
    ],
  },
  {
    type: "select",
    label: "Your number of dependents",
    name: ScoringFormFields.DEPENDENT_AMOUNT,
    isRequired: true,
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
    ],
  },
];

export const PASSPORT_DATA = [
  {
    type: "input",
    label: "Date of issue of the passport",
    name: ScoringFormFields.PASSPORT_ISSUE_DATE,
    placeholder: "Select Date and Time",
    isRequired: true,
  },
  {
    type: "input",
    label: "Division code",
    name: ScoringFormFields.PASSPORT_ISSUE_BRANCH,
    placeholder: "000000",
    isRequired: true,
    inputType: "number",
  },
];

export const EMPLOYMENT_FIELDS = [
  {
    type: "select",
    label: "Your employment status",
    name: ScoringFormFields.EMPLOYMENT_STATUS,
    isRequired: true,
    options: [
      { label: "Unemployed", value: "UNEMPLOYED" },
      { label: "Self-employed", value: "SELF_EMPLOYED" },
      { label: "Employed", value: "EMPLOYED" },
      { label: "Business owner", value: "BUSINESS_OWNER" },
    ],
  },
  {
    type: "input",
    label: "Your employer INN",
    name: ScoringFormFields.EMPLOYER_INN,
    placeholder: "000000000000",
    isRequired: true,
    inputType: "number",
  },
  {
    type: "input",
    label: "Your salary",
    name: ScoringFormFields.SALARY,
    placeholder: "For example 100 000",
    isRequired: true,
    inputType: "number",
  },
  {
    type: "select",
    label: "Your position",
    name: ScoringFormFields.POSITION,
    isRequired: true,
    options: [
      { label: "Worker", value: "WORKER" },
      { label: "Mid Manager", value: "MID_MANAGER" },
      { label: "Top Manager", value: "TOP_MANAGER" },
      { label: "Owner", value: "OWNER" },
    ],
  },
  {
    type: "input",
    label: "Your work experience total",
    name: ScoringFormFields.WORK_EXPERIENCE_TOTAL,
    placeholder: "For example 10",
    isRequired: true,
    inputType: "number",
  },
  {
    type: "input",
    label: "Your work experience current",
    name: ScoringFormFields.WORK_EXPERIENCE_CURRENT,
    placeholder: "For example 2",
    isRequired: true,
    inputType: "number",
  },
];

export const defaultValuesScoring = {
  [ScoringFormFields.GENDER]: "",
  [ScoringFormFields.MARITAL_STATUS]: "",
  [ScoringFormFields.DEPENDENT_AMOUNT]: "",

  [ScoringFormFields.PASSPORT_ISSUE_DATE]: "",
  [ScoringFormFields.PASSPORT_ISSUE_BRANCH]: "",

  [ScoringFormFields.EMPLOYMENT_STATUS]: "",

  [ScoringFormFields.EMPLOYER_INN]: "",
  [ScoringFormFields.SALARY]: "",

  [ScoringFormFields.POSITION]: "",

  [ScoringFormFields.WORK_EXPERIENCE_TOTAL]: "",
  [ScoringFormFields.WORK_EXPERIENCE_CURRENT]: "",
};
