import React, { useState } from "react";
import { Wrapper } from "./style";
import navLogo from "../../assets/icons/navbarLogo.png";
import { Dropdown } from "antd";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import { useSignOut } from "react-auth-kit";
import { warning } from "../Generic/ShapeSVG/Notfication/ByModal";
import ProfileModal from "../Login/ProfileModal";

const Navbar = () => {
  const signOut = useSignOut();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(true);
  const items = [
    {
      label: (
        <Wrapper.MenuItem
          onClick={() => {
            setShowConfirm(true);
            warning({
              title: "Are you sure?",
              content: "You are about to Log Out",
              onOk: () => {
                signOut();
                setShowConfirm(false);
              },

              okButtonProps: { danger: true },
              okText: "Logout",
              open: showConfirm,
            });
          }}
        >
          <IoMdSettings />
          <Wrapper.MenuItemText>Settings</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem
          onClick={() => {
            setShowConfirm(true);
            warning({
              title: "Are you sure?",
              content: "You are about to Log Out",
              onOk: () => {
                signOut();
                setShowConfirm(false);
              },

              okButtonProps: { danger: true },
              okText: "Logout",
              open: showConfirm,
            });
          }}
        >
          <BiLogOut style={{ color: "red" }} />
          <Wrapper.MenuItemText danger>Log Out</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];
  return (
    <Wrapper>
      <ProfileModal
        open={showProfileModal}
        onCancel={() => setShowProfileModal(false)}
      />
      <Wrapper.Container>
        <Wrapper.Logo loading="lazy" src={navLogo} />
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
          <Wrapper.Avatar>J</Wrapper.Avatar>
        </Dropdown>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Navbar;
