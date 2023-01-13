import React, { useState } from "react";
import { Wrapper } from "./style";
import LogoIcon from "../../assets/icons/LogoIcon.jpg";
import ShapeSvg from "../../components/Generic/ShapeSVG";
import { LoadingOutlined } from "@ant-design/icons";
import { notification } from "antd";
import axios from "axios";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const signIn = useSignIn();
  const [userInfo, setUserInfo] = useState({ fullName: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [playWarningAnimation, setPlayWarningAnimation] = useState(false);

  const navigate = useNavigate();

  const customNotification = ({ type, message, description, placement }) => {
    notification[type]({
      message,
      description,
      placement,
    });
  };

  const handleWarningAnitmation = () => {
    setPlayWarningAnimation(true);
    setTimeout(() => {
      setPlayWarningAnimation(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      onAuth();
    }
  };
  const onAuth = () => {
    handleWarningAnitmation();
    if (!userInfo.fullName || !userInfo.password) {
      customNotification({
        type: "error",
        message: "Please fill up all the fields",
        placement: "topRight",
      });
      return;
    }
    setLoading(true);
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/user/login`,
      data: userInfo,
    })
      .then((res) => {
        console.log(res);
        const { token, user } = res.data.data;

        signIn({
          token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: { fullName: user.fullName, isAuthed: true },
        });
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        handleWarningAnitmation();
        if (error.request.status >= 500) {
          return customNotification({
            type: "error",
            message: "ERROR",
            description: "Server is not responding",
          });
        }
        customNotification({
          type: "error",
          message: "ERROR",
          description: error.response.data.extraMessage,
          placement: "topRight",
        });
        setLoading(false);
      });
  };

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Left>
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            top={"0"}
            right={"0"}
          />
          <ShapeSvg
            firstColor={"#376dd2"}
            secondColor={"#39acea"}
            bottom={"0"}
            left={"0"}
          />
          <Wrapper.LoginGIF />
        </Wrapper.Left>
        <Wrapper.Right>
          <Wrapper.RightContainer>
            <Wrapper.Icon src={LogoIcon} />
            <Wrapper.Title>Welcome to Vizzano</Wrapper.Title>
            <Wrapper.Desc>
              Every day we try to sew with the best for you 😊. Vizzano has been
              with you for over 10 years. 😎 🙃
            </Wrapper.Desc>
            <Wrapper.Input
              onChange={handleChange}
              name="fullName"
              placeholder={"Name"}
            ></Wrapper.Input>
            <Wrapper.PasswordInput
              onChange={handleChange}
              name="password"
              placeholder={"Password"}
              onKeyDown={handleKeyDown}
            />
            <Wrapper.Button
              warningAnimation={playWarningAnimation}
              onClick={handleKeyDown}
            >
              {loading ? <LoadingOutlined /> : "Login"}
            </Wrapper.Button>
          </Wrapper.RightContainer>
        </Wrapper.Right>
      </Wrapper.Container>
    </Wrapper>
  );
};

export default Login;
