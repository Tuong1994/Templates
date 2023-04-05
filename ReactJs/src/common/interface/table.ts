import type { ColumnType } from "antd/es/table";

export interface ITableColumn<RecordType = unknown>
  extends ColumnType<RecordType> {
  isHide?: boolean;
}

export type ITableColumns<RecordType = unknown> = ITableColumn<RecordType>[];
