import React, { useState } from "react";
import { Modal } from "antd";
import { Wrapper } from "./style";

const ProfileModal = ({ open, onCancel }) => {
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const onChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const onSubmit = () => {};

  return (
    <Modal
      title="Profile"
      open={open}
      onText="Save"
      onCancel={onCancel}
      onOk={onSubmit}
    >
      <Wrapper>
        <Wrapper.Avatar>J</Wrapper.Avatar>
        <Wrapper.InputContainer>
          <Wrapper.Label>First name:</Wrapper.Label>
          <Wrapper.Input
            name="firstName"
            onChange={onChange}
            value={user.firstName}
            placeholder="name"
          />
        </Wrapper.InputContainer>{" "}
        <Wrapper.InputContainer>
          <Wrapper.Label>Last name:</Wrapper.Label>
          <Wrapper.Input
            name="lastName"
            onChange={onChange}
            value={user.lastName}
            placeholder="last name"
          />
        </Wrapper.InputContainer>
      </Wrapper>
    </Modal>
  );
};

export default ProfileModal;
