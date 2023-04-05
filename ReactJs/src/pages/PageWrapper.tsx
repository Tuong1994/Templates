import React from "react";
import * as Antd from "antd";
import * as Components from "../components";
import { useLocation } from "react-router-dom";
import useMenu from "common/repository/menu";

interface PageWrapperProps {
  isAdmin: boolean;
  children: string | React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, isAdmin }) => {
  const location = useLocation();

  const { pageMenu } = useMenu();

  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Antd.Layout>
      <Components.Header isAdmin={isAdmin} />

      {!isAdmin ? (
        <Antd.Layout.Content className="bg-white app-content">
          {children}
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

            <Antd.Layout.Content
              className={`content-inner ${
                collapsed && "content-inner-collapse"
              }`}
            >
              {children}
            </Antd.Layout.Content>
          </Antd.Layout>
        </Antd.Layout.Content>
      )}

      {!isAdmin && <Components.Footer />}
    </Antd.Layout>
  );
};

export default PageWrapper;
