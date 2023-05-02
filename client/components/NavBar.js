import {
  AppstoreOutlined,
  LogoutOutlined,
  RocketOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import Link from "next/link";
const items = [
  {
    label: "CMS",
    key: "logo",
    href: "/",
    style: { fontWeight: "bold", fontSize: "1.8em" },
  },
  {
    label: <Link href="/signin">Signin</Link>,
    key: "signin",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link href="/signup">Signup</Link>,
    key: "signup",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Dashboard",
    key: "Dashboard",
    style: { marginLeft: "auto" },
    children: [
      {
        type: "group",
        label: "Management",
        children: [{ label: "admin", key: "admin" }],
      },
    ],
  },
  {
    label: "Settings",
    key: "Settings",
    icon: (
      <SettingOutlined
        style={{
          fontSize: "1.4em",
        }}
      />
    ),

    children: [
      {
        label: "Mode",
        key: "mode",
        icon: <RocketOutlined />,
      },
      {
        label: "Logout",
        key: "logout",
        icon: <LogoutOutlined />,
      },
    ],
  },
];

const NavBar = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      style={{
        color: "#1677ff",
        fontSize: "16px",
        borderBottom: "1px solid #1677ff",
      }}
      triggerSubMenuAction="click"
      items={items}
    ></Menu>
  );
};
export default NavBar;
