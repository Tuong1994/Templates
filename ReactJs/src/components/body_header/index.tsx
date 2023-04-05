import React from "react";
import * as Antd from "antd";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";

interface BodyHeaderProps {
  items?: ItemType[];
  title?: string;
  titleSize?: 2 | 3 | 4 | 5;
  rootClass?: string;
  contentClass?: string;
  rightItems?: () => React.ReactNode | React.ReactNode[];
}

const BodyHeader: React.FC<BodyHeaderProps> = ({
  items = [],
  title = "Body header",
  titleSize = 4,
  rootClass = "",
  contentClass = "",
  rightItems,
}) => {
  return (
    <div className={`body-header ${rootClass}`}>
      {items && items.length > 0 && (
        <Antd.Breadcrumb separator=">" items={items} />
      )}

      <Antd.Row
        className={`body-header-title ${contentClass}`}
        justify="space-between"
        align="middle"
      >
        <Antd.Col>
          <Antd.Typography>
            <Antd.Typography.Title level={titleSize}>
              {title}
            </Antd.Typography.Title>
          </Antd.Typography>
        </Antd.Col>

        {rightItems && <Antd.Col>{rightItems && rightItems()}</Antd.Col>}
      </Antd.Row>
    </div>
  );
};

export default BodyHeader;
