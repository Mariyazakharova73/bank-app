import { FC } from "react";
import { PaymentSchedule } from "../../types/types";
import "./Table.scss";

export interface TableProps {
  tableData: PaymentSchedule[] | null;
  onSort: (key: string) => void;
  getBtnClass: (key: string) => string;
}

const Table: FC<TableProps> = ({ tableData: paymentSchedule, onSort, getBtnClass }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {paymentSchedule &&
              Object.keys(paymentSchedule[0]).map((key) => {
                return (
                  <th
                    className="table__header"
                    key={key}
                  >
                    {key.toUpperCase()}
                    <button
                      className={getBtnClass(key)}
                      onClick={() => onSort(key)}
                    ></button>
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
          {paymentSchedule?.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((key) => (
                <td
                  className="table__data"
                  key={key}
                >
                  {row[key as keyof typeof row]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
