import React from "react";
import * as Antd from "antd";
import * as Components from "../components";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import useMenu from "@/common/repository/menu";
import "@/styles/globals.scss";
import "@/styles/main.scss";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: "400",
  variable: "--poppins-font",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const { pageMenu } = useMenu();

  const [collapsed, setCollapsed] = React.useState(false);

  const isAdmin = router.pathname.includes("/admin");

  return (
    <Antd.Layout className={poppins.className}>
      <Components.Header isAdmin={isAdmin} />

      {!isAdmin ? (
        <Antd.Layout.Content className="bg-white app-content">
          <Component {...pageProps} />
        </Antd.Layout.Content>
      ) : (
        <Antd.Layout.Content className="app-admin-content">
          <Antd.Layout>
            <Antd.Layout.Sider
              className="content-sider"
              collapsible
              collapsed={collapsed}
              onCollapse={(value) => setCollapsed(value)}
            >
              <Antd.Menu
                className="sider-menu"
                items={pageMenu.filter(
                  (m) =>
                    m?.key !== "product" &&
                    m?.key !== "warranty" &&
                    m?.key !== "payment"
                )}
              />
            </Antd.Layout.Sider>

            <Antd.Layout.Content className={`content-inner ${collapsed && "content-inner-collapse"}`}>
              <Component {...pageProps} />
            </Antd.Layout.Content>
          </Antd.Layout>
        </Antd.Layout.Content>
      )}

      {!isAdmin && <Components.Footer />}
    </Antd.Layout>
  );
}
