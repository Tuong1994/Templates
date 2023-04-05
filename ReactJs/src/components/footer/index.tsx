import React from "react";
import FooterInfo from "./Info";
import useLangStore from "store/LangStore";
import FooterFeatures from "./Features";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  return (
    <div className="footer">
      {/* FOOTER INFO */}
      <FooterInfo langs={langs} />

      {/* FOOTER FEATURES */}
      <FooterFeatures langs={langs} />
    </div>
  );
};

export default Footer;
