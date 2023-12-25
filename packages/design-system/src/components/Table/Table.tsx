import type {
  ComponentPropsWithoutRef,
  DetailedHTMLProps,
  ReactNode,
  TableHTMLAttributes,
} from "react";

import { cn } from "@shui/utils";

import { tableTheme } from "./Table.theme";

type Primitive = string | number | boolean;

export interface ColumnItem<T> {
  title: ReactNode;
  selector: (arg: T) => ReactNode | Primitive;
  loader?: ReactNode;
  className?: string;
  onClick?: (arg: T) => void;
}

export interface TableProps<T>
  extends DetailedHTMLProps<
    TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  > {
  showColumns?: boolean;
  columns?: ColumnItem<T>[];
  data: T[];
  loading?: boolean;
  wrapperProps?: ComponentPropsWithoutRef<"div">;
  onRowClick?: (arg: T) => void;
}

export const Table = <T,>({
  className,
  showColumns = true,
  columns = [],
  data = [],
  loading = false,
  wrapperProps,
  onRowClick = undefined,
  ...props
}: TableProps<T>) => {
  const {
    wrapper,
    table,
    tableHead,
    tableHeadRow,
    tableHeadCell,
    tableRow,
    tableCell,
  } = tableTheme({ className });

  const renderTableBody = (() => {
    if (loading) {
      return Array.from([1, 2, 3]).map((_, index) => (
        <tr key={index}>
          {columns.map((column, columnIndex) => (
            <td key={columnIndex}>{column.loader}</td>
          ))}
        </tr>
      ));
    }

    return data.map((item, dataIndex) => (
      <tr
        className={tableRow()}
        key={dataIndex}
        onClick={() => onRowClick?.(item)}
      >
        {columns.map((column, columnIndex) => (
          <td
            className={tableCell({ className: column?.className })}
            key={`${column.title?.toString()}-${columnIndex}-${dataIndex}`}
            onClick={() => column?.onClick?.(item)}
          >
            {column.selector(item)}
          </td>
        ))}
      </tr>
    ));
  })();

  return (
    <div {...wrapperProps} className={cn(wrapper(), wrapperProps?.className)}>
      <table className={table({ className })} {...props}>
        {showColumns && (
          <thead className={tableHead()}>
            <tr className={tableHeadRow()}>
              {columns.map((column) => (
                <th
                  className={tableHeadCell({ className: column?.className })}
                  key={column.title?.toString()}
                >
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{renderTableBody}</tbody>
      </table>
    </div>
  );
};
