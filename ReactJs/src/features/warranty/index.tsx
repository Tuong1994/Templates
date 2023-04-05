import React from "react";
import * as Components from "components";
import { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import WarrantyBanner from "features/warranty/Banner";
import WarrantyStep from "features/warranty/Step";
import WarrantyCondition from "features/warranty/Condition";
import WarrantyReturns from "features/warranty/Returns";
import useLangStore from "store/LangStore";

const Warranty: React.FC<{}> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const breadcumbs: ItemType[] = [
    { title: <Link to="/">{langs?.header.menu.home}</Link> },
    { title: <Link to="/warranty">{langs?.header.menu.warranty}</Link> },
  ];

  return (
    <div className="warranty">
      <Components.BodyHeader title="" items={breadcumbs} />

      <WarrantyBanner langs={langs} />

      <WarrantyStep langs={langs} />

      <WarrantyCondition langs={langs} />

      <WarrantyReturns langs={langs} />
    </div>
  );
};

export default Warranty;
