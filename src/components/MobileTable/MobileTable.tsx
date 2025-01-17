import { FC } from "react";
import { PaymentSchedule } from "../../types/types";
import "./MobileTable.scss";

export interface MobileTableProps {
  tableData: PaymentSchedule[] | null;
  onSort: (key: string) => void;
  getBtnClass: (key: string) => string;
}

const MobileTable: FC<MobileTableProps> = ({ tableData: paymentSchedule, onSort, getBtnClass }) => {
  return (
    <div className="table-mobile">
      {paymentSchedule?.map((row, index) => (
        <div
          className="table-mobile__card"
          key={index}
        >
          {Object.entries(row).map(([key, value]) => (
            <div
              className="table-mobile__row"
              key={key}
            >
              <span className="table-mobile__label">
                {key.toUpperCase()}{" "}
                <button
                  className={getBtnClass(key)}
                  onClick={() => onSort(key)}
                ></button>
              </span>
              <span className="table-mobile__value">{value}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MobileTable;
