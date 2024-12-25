export enum FormFields {
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

export interface InfoFormValues {
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
