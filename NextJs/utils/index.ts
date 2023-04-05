import { ELang } from "@/common/interface/lang";

const utils = {
  formatMoney: (l: number, m: number) => {
    if (!m)
      return `${l === ELang.eng ? "$" : ""}
    0 ${l === ELang.vn ? "đ" : ""}`;

    return `${l === ELang.eng ? "$" : ""}
    ${m.toLocaleString()} ${l === ELang.vn ? "đ" : ""}`;
  },

  formatPhoneNumber: (p: string) => {
    if (p.length > 10) return p;

    let format = "(xxx) - xxx xxxx";
    for (let i = 0; i < p.length; i++) {
      format = format.replace("x", p[i]);
    }
    return format;
  },
};

export default utils;
