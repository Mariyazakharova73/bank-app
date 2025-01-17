import bag from "../../assets/images/loan-bag.svg";
import calendar from "../../assets/images/loan-calendar.svg";
import clock from "../../assets/images/loan-clock.svg";
import creditCard from "../../assets/images/loan-credit-card.svg";
import money from "../../assets/images/loan-money.svg";
import AboutTabData from "../../components/AboutTabData/AboutTabData";
import CashBackTabData from "../../components/CashBackTabData/CashBackTabData";
import FAQTabData from "../../components/FAQTabData/FAQTabData";
import RatesTabData from "../../components/RatesTabData/RatesTabData";
import { PrescoringFormFields } from "../../types/types";

export const CREDIT_CARD_DATA = [
  {
    id: 0,
    title: "Up to 160 days",
    description: "No percent",
    tooltipText: "When repaying the full debt up to 160 days.",
  },
  {
    id: 1,
    title: "Up to 600 000 ₽",
    description: "Credit limit",
    tooltipText: "Over the limit willaccrue percent",
  },
  {
    id: 2,
    title: "0 ₽",
    description: "Card service is free",
    tooltipText: "Promotion valid until December 31, 2022.",
  },
];

export const tabs = [
  { name: "tab1", label: "About card", content: <AboutTabData /> },
  { name: "tab2", label: "Rates and conditions", content: <RatesTabData /> },
  { name: "tab3", label: "Cashback", content: <CashBackTabData /> },
  { name: "tab4", label: "FAQ", content: <FAQTabData /> },
];

export const ABOUT_CARD_DATA = [
  {
    id: 0,
    icon: money,
    title: "Up to 50 000 ₽",
    text: "Cash and transfers without commission and percent",
  },
  {
    id: 1,
    icon: calendar,
    title: "Up to 160 days",
    text: "Without percent on the loan",
  },
  {
    id: 2,
    icon: clock,
    title: "Free delivery",
    text: "We will deliver your card by courier at a convenient place and time for you",
  },
  {
    id: 3,
    icon: bag,
    title: "Up to 12 months",
    text: "No percent. For equipment, clothes and other purchases in installments",
  },
  {
    id: 4,
    icon: creditCard,
    title: "Convenient deposit and withdrawal",
    text: "At any ATM. Top up your credit card for free with cash or transfer from other cards",
  },
];

export const RATES_CARD_DATA = [
  { id: 0, label: "Card currency", value: ["Rubles, dollars, euro"] },
  { id: 1, label: "Interest free period", value: ["0% up to 160 days"] },
  { id: 2, label: "Payment system", value: ["Mastercard, Visa"] },
  { id: 3, label: "Maximum credit limit on the card", value: ["600 000 ₽"] },
  {
    id: 4,
    label: "Replenishment and withdrawal",
    value: ["At any ATM. Top up your credit card for free with cash or transfer from other cards"],
  },
  { id: 5, label: "Max cashback per month", value: ["15 000 ₽"] },
  {
    id: 6,
    label: "Transaction Alert",
    value: [
      "60 ₽ — SMS or push notifications ",
      "0 ₽ — card statement, information about transactions in the online bank",
    ],
  },
];

export const CASHBACK_CARD_DATA = [
  {
    id: 0,
    title: "5%",
    text: "For food delivery, cafes and restaurants",
  },
  {
    id: 1,
    title: "5%",
    text: "In supermarkets with our subscription",
  },
  {
    id: 2,
    title: "2%",
    text: "In clothing stores and children's goods",
  },
  {
    id: 3,
    title: "1%",
    text: "Other purchases and payment of services and fines",
  },
  {
    id: 4,
    title: "up to 3%",
    text: "Shopping in online stores",
  },
  {
    id: 5,
    title: "30%",
    text: "Purchases from our partners",
  },
];

export const RECEIVING_CARD_DATA = [
  {
    questionId: 0,
    question: "How to get a card?",
    answer:
      "We will deliver your card by courier free of charge. Delivery in Moscow and St. Petersburg - 1-2 working days. For other regions of the Russian Federation - 2-5 working days.",
  },
  {
    questionId: 1,
    question: "What documents are needed and how old should one be to get a card?",
    answer: "Need a passport. You must be between 20 and 70 years old.",
  },
  {
    questionId: 2,
    question: "In what currency can I issue a card?",
    answer: "In rubles, dollars or euro",
  },
  {
    questionId: 3,
    question: "How much income do I need to get a credit card?",
    answer:
      "To obtain a credit card, you will need an income of at least 25,000 rubles per month after taxes.",
  },
  {
    questionId: 4,
    question: "How do I find out about the bank's decision on my application?",
    answer: "After registration, you will receive an e-mail with a decision on your application.",
  },
];

export const USING_CARD_DATA = [
  {
    questionId: 0,
    question: "What is an interest free credit card?",
    answer:
      "A credit card with a grace period is a bank card with an established credit limit, designed for payment, reservation of goods and services, as well as for receiving cash, which allows you to use credit funds free of charge for a certain period.",
  },
  {
    questionId: 1,
    question: "How to activate a credit card",
    answer:
      "You can activate your credit card and generate a PIN code immediately after receiving the card at a bank branch using a PIN pad.",
  },
  {
    questionId: 2,
    question: "What is a settlement date?",
    answer:
      "The settlement date is the date from which you can pay off the debt for the reporting period. The settlement date falls on the first calendar day following the last day of the reporting period. The first settlement date is reported by the bank when transferring the issued credit card to the client, and then in the monthly account statement.",
  },
  {
    questionId: 3,
    question: "What do I need to know about interest rates?",
    answer:
      "For each reporting period from the 7th day of the previous month to the 6th day of the current month inclusive, a statement is generated for the credit card. The statement contains information on the amount and timing of the minimum payment, as well as the total amount of debt as of the date of issue.",
  },
];

export const GET_CARD_DATA = [
  "Fill out an online application - you do not need to visit the bank",
  `Find out the bank's decision immediately after filling out the application`,
  "The bank will deliver the card free of charge, wherever convenient, to your city",
];

export const SELECT_TERM_OPTIONS = [
  { label: "6 month", value: "6" },
  { label: "12 month", value: "12" },
  { label: "18 month", value: "18" },
  { label: "24 month", value: "24" },
];

export const prescoringDefaultValues = {
  [PrescoringFormFields.LAST_NAME]: "",
  [PrescoringFormFields.FIRST_NAME]: "",
  [PrescoringFormFields.MIDDLE_NAME]: "",
  [PrescoringFormFields.TERM]: 6,
  [PrescoringFormFields.EMAIL]: "",
  [PrescoringFormFields.BIRTHDATE]: "",
  [PrescoringFormFields.PASSPORT_SERIES]: "",
  [PrescoringFormFields.PASSPORT_NUMBER]: "",
  [PrescoringFormFields.AMOUNT]: 100000,
};

export const FORM_FIELDS = [
  {
    type: "input",
    label: "Your last name",
    name: PrescoringFormFields.LAST_NAME,
    placeholder: "For Example Doe",
    isRequired: true,
  },
  {
    type: "input",
    label: "Your first name",
    name: PrescoringFormFields.FIRST_NAME,
    placeholder: "For Example John",
    isRequired: true,
  },
  {
    type: "input",
    label: "Your patronymic",
    name: PrescoringFormFields.MIDDLE_NAME,
    placeholder: "For Example Victorovich",
    isRequired: true,
  },
  {
    type: "select",
    label: "Select term",
    name: PrescoringFormFields.TERM,
    isRequired: true,
  },

  {
    type: "input",
    label: "Your email",
    name: PrescoringFormFields.EMAIL,
    placeholder: "test@gmail.com",
    isRequired: true,
  },
  {
    type: "input",
    label: "Your date of birth",
    name: PrescoringFormFields.BIRTHDATE,
    placeholder: "Select Date and Time",
    isRequired: true,
  },
  {
    type: "input",
    label: "Your passport series",
    name: PrescoringFormFields.PASSPORT_SERIES,
    placeholder: "0000",
    isRequired: true,
    inputType: "number",
  },
  {
    type: "input",
    label: "Your passport number",
    name: PrescoringFormFields.PASSPORT_NUMBER,
    placeholder: "000000",
    isRequired: true,
    inputType: "number",
  },
];
