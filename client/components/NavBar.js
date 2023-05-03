import {
  AppstoreOutlined,
  LogoutOutlined,
  RocketOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import Link from "next/link";
const items = [
  {
    label: <Link href="/">CMS</Link>,
    key: "logo",
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
    key: "dashboard",
    style: { marginLeft: "auto" },
    children: [
      {
        type: "group",
        label: "Management",
        children: [{ label: <Link href="/admin">Admin</Link>, key: "admin" }],
      },
    ],
  },
  {
    label: "Settings",
    key: "settings",
    icon: (
      <SettingOutlined
        style={{
          fontSize: "1.2em",
        }}
      />
    ),
    children: [
      {
        label: `Mode : Dark`,
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
  useEffect(() => {
    if (!localStorage.getItem("currentPathKey")) {
      localStorage.setItem("currentPathKey", "logo");
    } else {
      setCurrent(localStorage.getItem("currentPathKey"));
    }
  }, []);
  const onClick = (e) => {
    if (e.key !== "mode" && e.key !== "logout") {
      console.log("here");
      localStorage.setItem("currentPathKey", e.key);
      setCurrent(e.key);
    }
  };
  console.log(current);
  return (
    <Menu
      onClick={onClick}
      mode="horizontal"
      style={{
        fontSize: "16px",
      }}
      triggerSubMenuAction="click"
      items={items}
      selectedKeys={[current]}
    ></Menu>
  );
};
export default NavBar;
