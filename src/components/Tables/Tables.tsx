import { useMemo, useState } from "react";
import { useScoringStore } from "../../store/ScoringStore";
import MobileTable from "../MobileTable/MobileTable";
import Table from "../Table/Table";

type Direction = "asc" | "desc";

interface SortConfig {
  key: string;
  direction: Direction;
}

const Tables = () => {
  const { paymentSchedule } = useScoringStore();

  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  const handleSort = (key: string) => {
    let direction: Direction = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    if (!paymentSchedule) return null;
    return [...paymentSchedule].sort((a, b) => {
      if (!sortConfig) return 0;
      const aValue = a[sortConfig.key as keyof typeof a];
      const bValue = b[sortConfig.key as keyof typeof b];
      if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [paymentSchedule, sortConfig]);

  const getBtnClass = (key: string) => {
    const baseClass = "table__header-btn";
    const isAsc = sortConfig?.key === key && sortConfig.direction === "asc";
    return isAsc ? `${baseClass} ${baseClass}--asc` : baseClass;
  };

  return (
    <div>
      <Table
        tableData={sortedData}
        onSort={handleSort}
        getBtnClass={getBtnClass}
      />
      <MobileTable
        tableData={sortedData}
        onSort={handleSort}
        getBtnClass={getBtnClass}
      />
    </div>
  );
};

export default Tables;
