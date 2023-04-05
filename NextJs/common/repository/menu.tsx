import type { MenuProps } from "antd";
import { DropboxOutlined, SettingOutlined } from "@ant-design/icons";
import {
  FaUser,
  FaDropbox,
  FaDollarSign,
  FaTruckMoving,
  FaMoneyBill,
} from "react-icons/fa";
import useLangStore from "@/store/LangStore";
import Link from "next/link";

const useMenu = () => {
  const langs = useLangStore((state) => state.langs);

  const pageMenu: MenuProps["items"] = [
    {
      key: "product",
      label: (
        <Link href="#" className="hover:text-black">
          {langs?.header.menu.product}
        </Link>
      ),
      icon: <DropboxOutlined />,
    },
    {
      key: "payment",
      label: (
        <Link href="/payment" className="hover:text-black">
          {langs?.header.menu.payment}
        </Link>
      ),
      icon: <FaMoneyBill />,
    },
    {
      key: "warranty",
      label: (
        <Link href="/warranty" className="hover:text-black">
          {langs?.header.menu.warranty}
        </Link>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "customers",
      label: (
        <Link href="/admin/customer/list" className="hover:text-black">
          {langs?.header.menu.customers}
        </Link>
      ),
      icon: <FaUser />,
    },
    {
      key: "products",
      label: (
        <Link href="/admin/product/list" className="hover:text-black">
          {langs?.header.menu.products}
        </Link>
      ),
      icon: <FaDropbox />,
    },
    {
      key: "orders",
      label: (
        <Link href="/admin/order/list" className="hover:text-black">
          {langs?.header.menu.orders}
        </Link>
      ),
      icon: <FaDollarSign />,
    },
    {
      key: "shipments",
      label: (
        <Link href="/admin/shipment" className="hover:text-black">
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
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.cpu}
        </Link>
      ),
      children: [
        {
          key: "intel",
          label: <Link href="/">INTEL</Link>,
        },
        {
          key: "amd",
          label: <Link href="/">AMD</Link>,
        },
      ],
    },
    {
      key: "main",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.main}
        </Link>
      ),
      children: [
        {
          key: "main-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
        {
          key: "main-asus",
          label: <Link href="/">ASUS</Link>,
        },
        {
          key: "main-msi",
          label: <Link href="/">MSI</Link>,
        },
        {
          key: "main-asrock",
          label: <Link href="/">ASROCK</Link>,
        },
      ],
    },
    {
      key: "ram",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.ram}
        </Link>
      ),
      children: [
        {
          key: "ram-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "hdd",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.hdd}
        </Link>
      ),
      children: [
        {
          key: "western",
          label: <Link href="/">WESTERN</Link>,
        },
        {
          key: "seagate",
          label: <Link href="/">SEAGATE</Link>,
        },
      ],
    },
    {
      key: "ssd",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.ssd}
        </Link>
      ),
      children: [
        {
          key: "ssd-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "vga",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.vga}
        </Link>
      ),
      children: [
        {
          key: "vga-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
        {
          key: "vga-asus",
          label: <Link href="/">ASUS</Link>,
        },
        {
          key: "vga-msi",
          label: <Link href="/">MSI</Link>,
        },
      ],
    },
    {
      key: "psu",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.psu}
        </Link>
      ),
      children: [
        {
          key: "psu-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
      ],
    },
    {
      key: "monitor",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.monitor}
        </Link>
      ),
      children: [
        {
          key: "viewsonic",
          label: <Link href="/">VIEWSONIC</Link>,
        },
        {
          key: "samsung",
          label: <Link href="/">SAMSUNG</Link>,
        },
        {
          key: "lg",
          label: <Link href="/">LG</Link>,
        },
      ],
    },
    {
      key: "pc",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.pc}
        </Link>
      ),
      children: [
        {
          key: "zgOne",
          label: <Link href="/">ZG ONE</Link>,
        },
        {
          key: "zgTwo",
          label: <Link href="/">ZG TWO</Link>,
        },
        {
          key: "zgThree",
          label: <Link href="/">ZG THREE</Link>,
        },
        {
          key: "zgFour",
          label: <Link href="/">ZG FOUR</Link>,
        },
      ],
    },
    {
      key: "laptop",
      label: (
        <Link
          href="/"
          className="hover:text-black"
          style={{ color: "#222", textTransform: "uppercase" }}
        >
          {langs?.header.menu.laptop}
        </Link>
      ),
      children: [
        {
          key: "laptop-gigabyte",
          label: <Link href="/">GIGABYTE</Link>,
        },
        {
          key: "laptop-asus",
          label: <Link href="/">ASUS</Link>,
        },
        {
          key: "laptop-msi",
          label: <Link href="/">MSI</Link>,
        },
        {
          key: "laptop-dell",
          label: <Link href="/">DELL</Link>,
        },
        {
          key: "laptop-hp",
          label: <Link href="/">HP</Link>,
        },
      ],
    },
  ];

  return { pageMenu, productMenu };
};

export default useMenu;
