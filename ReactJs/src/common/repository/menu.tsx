import type { MenuProps } from "antd";
import { DropboxOutlined, SettingOutlined } from "@ant-design/icons";
import {
  FaUser,
  FaDropbox,
  FaDollarSign,
  FaTruckMoving,
  FaMoneyBill,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useLangStore from "store/LangStore";

const useMenu = () => {
  const langs = useLangStore((state) => state.langs);

  const pageMenu: MenuProps["items"] = [
    {
      key: "product",
      label: (
        <Link to="#" className="hover:text-black">
          {langs?.header.menu.product}
        </Link>
      ),
      icon: <DropboxOutlined />,
    },
    {
      key: "payment",
      label: (
        <Link to="/payment" className="hover:text-black">
          {langs?.header.menu.payment}
        </Link>
      ),
      icon: <FaMoneyBill />,
    },
    {
      key: "warranty",
      label: (
        <Link to="/warranty" className="hover:text-black">
          {langs?.header.menu.warranty}
        </Link>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "customers",
      label: (
        <Link to="/admin/customer/list" className="hover:text-black">
          {langs?.header.menu.customers}
        </Link>
      ),
      icon: <FaUser />,
    },
    {
      key: "products",
      label: (
        <Link to="/admin/product/list" className="hover:text-black">
          {langs?.header.menu.products}
        </Link>
      ),
      icon: <FaDropbox />,
    },
    {
      key: "orders",
      label: (
        <Link to="/admin/order/list" className="hover:text-black">
          {langs?.header.menu.orders}
        </Link>
      ),
      icon: <FaDollarSign />,
    },
    {
      key: "shipments",
      label: (
        <Link to="/admin/shipment" className="hover:text-black">
          {langs?.header.menu.shipments}
        </Link>
      ),
      icon: <FaTruckMoving />,
    },
  ];

  const productMenu: MenuProps["items"] = [
    {
      key: "cpu",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.cpu}
        </Link>
      ),
      children: [
        {
          key: "intel",
          label: <Link to="/product/list">INTEL</Link>,
        },
        {
          key: "amd",
          label: <Link to="/product/list">AMD</Link>,
        },
      ],
    },
    {
      key: "main",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.main}
        </Link>
      ),
      children: [
        {
          key: "main-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
        {
          key: "main-asus",
          label: <Link to="/product/list">ASUS</Link>,
        },
        {
          key: "main-msi",
          label: <Link to="/product/list">MSI</Link>,
        },
        {
          key: "main-asrock",
          label: <Link to="/product/list">ASROCK</Link>,
        },
      ],
    },
    {
      key: "ram",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.ram}
        </Link>
      ),
      children: [
        {
          key: "ram-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "hdd",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.hdd}
        </Link>
      ),
      children: [
        {
          key: "western",
          label: <Link to="/product/list">WESTERN</Link>,
        },
        {
          key: "seagate",
          label: <Link to="/product/list">SEAGATE</Link>,
        },
      ],
    },
    {
      key: "ssd",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.ssd}
        </Link>
      ),
      children: [
        {
          key: "ssd-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "vga",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.vga}
        </Link>
      ),
      children: [
        {
          key: "vga-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
        {
          key: "vga-asus",
          label: <Link to="/product/list">ASUS</Link>,
        },
        {
          key: "vga-msi",
          label: <Link to="/product/list">MSI</Link>,
        },
      ],
    },
    {
      key: "psu",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.psu}
        </Link>
      ),
      children: [
        {
          key: "psu-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "monitor",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.monitor}
        </Link>
      ),
      children: [
        {
          key: "viewsonic",
          label: <Link to="/product/list">VIEWSONIC</Link>,
        },
        {
          key: "samsung",
          label: <Link to="/product/list">SAMSUNG</Link>,
        },
        {
          key: "lg",
          label: <Link to="/product/list">LG</Link>,
        },
      ],
    },
    {
      key: "pc",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.pc}
        </Link>
      ),
      children: [
        {
          key: "zgOne",
          label: <Link to="/product/list">ZG ONE</Link>,
        },
        {
          key: "zgTwo",
          label: <Link to="/product/list">ZG TWO</Link>,
        },
        {
          key: "zgThree",
          label: <Link to="/product/list">ZG THREE</Link>,
        },
        {
          key: "zgFour",
          label: <Link to="/product/list">ZG FOUR</Link>,
        },
      ],
    },
    {
      key: "laptop",
      label: (
        <Link
          to="/product/list"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.laptop}
        </Link>
      ),
      children: [
        {
          key: "laptop-gigabyte",
          label: <Link to="/product/list">GIGABYTE</Link>,
        },
        {
          key: "laptop-asus",
          label: <Link to="/product/list">ASUS</Link>,
        },
        {
          key: "laptop-msi",
          label: <Link to="/product/list">MSI</Link>,
        },
        {
          key: "laptop-dell",
          label: <Link to="/product/list">DELL</Link>,
        },
        {
          key: "laptop-hp",
          label: <Link to="/product/list">HP</Link>,
        },
      ],
    },
  ];

  return { pageMenu, productMenu };
};

export default useMenu;
