import React from "react";
import * as Antd from "antd";
import * as Components from "components";
import type { TableProps } from "antd/es/table";
import { FaBars } from "react-icons/fa";
import { ITableColumns } from "common/interface/table";
import useOption from "common/repository/option";

interface TableCustomProps<M> {
  data: M[];
  columns: ITableColumns<M>;
  hasFilter?: boolean;
  style?: React.CSSProperties;
  hideCols?: boolean;
  scroll?: TableProps<M>["scroll"];
  size?: "large" | "middle" | "small";
  filterFields?(): React.ReactNode;
}

const Table = <M extends object>({
  data,
  columns,
  hasFilter,
  style,
  hideCols,
  scroll = { x: true },
  size,
  filterFields,
}: TableCustomProps<M>) => {
  const options = useOption();

  const [checked, setChecked] = React.useState<string[]>(
    columns.filter((c) => !c.isHide).map((c) => c.key as string)
  );

  const filterCols = columns.filter((c) => checked.includes(c.key as string));

  const toolTipTitle = () => {
    if (columns && columns.length) {
      return (
        <Antd.Checkbox.Group
          value={checked}
          onChange={(vals) => {
            setChecked(vals as string[]);
          }}
        >
          <Antd.List
            dataSource={columns}
            renderItem={(col) => (
              <Antd.List.Item>
                <Antd.Checkbox
                  value={col.key}
                  checked={Boolean(col.key)}
                  className="tooltip-checkbox"
                >
                  {col.key === "avatar" ? "Avatar" : (col.title as string)}
                </Antd.Checkbox>
              </Antd.List.Item>
            )}
          />
        </Antd.Checkbox.Group>
      );
    }
  };

  let processColumns: ITableColumns<M> = [
    ...filterCols,
    {
      title: (
        <Antd.Tooltip
          rootClassName="table-tooltip"
          trigger={["click"]}
          placement="bottomRight"
          title={toolTipTitle()}
        >
          <FaBars className="cursor-pointer" />
        </Antd.Tooltip>
      ),
      dataIndex: "expand",
      key: "expand",
      isHide: false,
      width: 50,
    },
  ];

  return (
    <React.Fragment>
      {hasFilter && (
        <Antd.Form className="table-filter">
          <Antd.Row gutter={[10, 10]} align="middle">
            <Antd.Col xs={24} sm={20} lg={20}>
              {filterFields && filterFields()}
            </Antd.Col>
            <Antd.Col xs={24} sm={4} lg={4}>
              <Components.Fields.Select
                options={options.filterTable}
                rootClassName="filter-control"
              />
            </Antd.Col>
          </Antd.Row>
        </Antd.Form>
      )}

      <Antd.Table<M>
        rootClassName="table-custom"
        rowClassName="custom-row"
        rowKey="id"
        size={size}
        scroll={scroll}
        style={style}
        pagination={false}
        dataSource={data}
        columns={!hideCols ? columns : processColumns}
      />
    </React.Fragment>
  );
};

export default Table;
