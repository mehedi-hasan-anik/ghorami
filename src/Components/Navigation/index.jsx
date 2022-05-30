import { HomeOutlined } from "@ant-design/icons";
import { Col, Menu, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Topbar from "../Topbar";
import "./Navigation.css";

// const { SubMenu } = Menu;

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

const Navigation = ({ children }) => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <div className="navBar">
      <Row>
        <Col className="gutter-row" lg={4}>
          <div className="side_bar">
            <Menu
              mode="inline"
              theme="dark"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
            >
              <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item>

              <Menu.Item key="investor-account" icon={<HomeOutlined />}>
                <Link to="/investor-account">Investor Account</Link>
              </Menu.Item>
              <Menu.Item key="information" icon={<HomeOutlined />}>
                <Link to="/information">Information</Link>
              </Menu.Item>

              {/* <SubMenu key="about_us" title="About US">
                <Menu.Item key="about">
                  <Link to="/about">About</Link>
                </Menu.Item>
              </SubMenu> */}
            </Menu>
          </div>
        </Col>
        <Col className="gutter-row" lg={20}>
          <Topbar />
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default Navigation;
