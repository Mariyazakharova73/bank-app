export enum PrescoringFormFields {
  LAST_NAME = "lastName",
  FIRST_NAME = "firstName",
  MIDDLE_NAME = "middleName",
  TERM = "term",
  EMAIL = "email",
  BIRTHDATE = "birthdate",
  PASSPORT_SERIES = "passportSeries",
  PASSPORT_NUMBER = "passportNumber",
  AMOUNT = "amount",
}

export interface PrescoringFormValues {
  lastName: string;
  firstName: string;
  middleName: string;
  term: number;
  email: string;
  birthdate: string | Date;
  passportSeries: string;
  passportNumber: string;
  amount: number;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}

export enum MaritalStatus {
  MARRIED = "MARRIED",
  DIVORCED = "DIVORCED",
  SINGLE = "SINGLE",
  WIDOW_WIDOWER = "WIDOW_WIDOWER",
}

export enum EmploymentStatus {
  UNEMPLOYED = "UNEMPLOYED",
  SELF_EMPLOYED = "SELF_EMPLOYED",
  EMPLOYED = "EMPLOYED",
  BUSINESS_OWNER = "BUSINESS_OWNER",
}

export enum Position {
  WORKER = "WORKER",
  MID_MANAGER = "MID_MANAGER",
  TOP_MANAGER = "TOP_MANAGER",
  OWNER = "OWNER",
}

export enum ScoringFormFields {
  GENDER = "gender",
  MARITAL_STATUS = "maritalStatus",
  DEPENDENT_AMOUNT = "dependentAmount",
  PASSPORT_ISSUE_DATE = "passportIssueDate",
  PASSPORT_ISSUE_BRANCH = "passportIssueBranch",
  EMPLOYMENT_STATUS = "employmentStatus",
  EMPLOYER_INN = "employerINN",
  SALARY = "salary",
  POSITION = "position",
  WORK_EXPERIENCE_TOTAL = "workExperienceTotal",
  WORK_EXPERIENCE_CURRENT = "workExperienceCurrent",
}

export interface ScoringFormValues {
  gender: Gender | string;
  maritalStatus: MaritalStatus | string;
  dependentAmount: string;

  passportIssueDate: string;
  passportIssueBranch: string;

  employmentStatus: EmploymentStatus | string;
  employerINN: string;
  salary: string;
  position: Position | string;
  workExperienceTotal: string;
  workExperienceCurrent: string;
}

export interface creditOffer {
  applicationId: number;
  requestedAmount: number;
  totalAmount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
}

export interface AppStatus {
  id: number;
  client: Client;
  credit: Credit;
  status: CreditStatus;
  creationDate: string;
  signDate: string | null;
  sesCode: string | null;
  statusHistory: StatusHistory[];
}

// property AppStatus
interface Client {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  gender: Gender;
  birthdate: string;
  passportSeries: string;
  passportNumber: string;
  passportIssueDate: string;
  passportIssueBranch: string;
  maritalStatus: MaritalStatus;
  dependentAmount: number;
  employment: Employment;
  account: string | null;
}

interface Employment {
  employmentStatus: EmploymentStatus;
  employerINN: string;
  salary: number;
  position: Position;
  workExperienceTotal: number;
  workExperienceCurrent: number;
}

export interface PaymentSchedule {
  number: number;
  date: string;
  totalPayment: number;
  interestPayment: number;
  debtPayment: number;
  remainingDebt: number;
}

interface Credit {
  amount: number;
  term: number;
  monthlyPayment: number;
  rate: number;
  psk: number;
  isInsuranceEnabled: boolean;
  isSalaryClient: boolean;
  paymentSchedule: PaymentSchedule[];
}

interface StatusHistory {
  status: CreditStatus;
  time: string;
  changeType: ChangeType;
}

export enum CreditStatus {
  PREAPPROVAL = "PREAPPROVAL",
  APPROVED = "APPROVED",
  CC_DENIED = "CC_DENIED",
  CC_APPROVED = "CC_APPROVED",
  REQUEST_DENIED = "REQUEST_DENIED",
  PREPARE_DOCUMENTS = "PREPARE_DOCUMENTS",
  DOCUMENT_CREATED = "DOCUMENT_CREATED",
  CLIENT_DENIED = "CLIENT_DENIED",
  DOCUMENT_SIGNED = "DOCUMENT_SIGNED",
  CREDIT_ISSUED = "CREDIT_ISSUED",
}
type ChangeType = "MANUAL" | "AUTOMATIC";
