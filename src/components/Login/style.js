import styled from "styled-components";
import { Input } from "antd";
import man from "../../assets/images/man.jpg";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
Wrapper.Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
Wrapper.Left = styled.div`
  flex: 1;
  height: 100%;
  background-color: #3067cb;
  position: relative;
  @media (max-width: 1150px) {
    display: none;
  }
`;
Wrapper.LoginGIF = styled.div`
  background-image: url(${man});
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 65%;
  width: 65%;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  z-index: 2;
`;

Wrapper.Right = styled.div`
  flex: 1;
  background-color: #fff;
`;
Wrapper.RightContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 600px) {
    width: 100%;
  }
`;
Wrapper.Icon = styled.img`
  width: 80px;
  height: 80px;
  padding: 5px;
  border: 1px solid rgb(245, 245, 245);
  border-radius: 50%;
`;

Wrapper.Title = styled.div`
  margin-top: 20px;
  font-size: 30px;
  color: rgb(57, 56, 77);
  font-weight: 700;
`;
Wrapper.Desc = styled.div`
  margin-top: 10px;
  color: rgb(178, 176, 184);
  text-align: center;
  width: 80%;
  font-weight: 300;
`;

Wrapper.Input = styled(Input)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.PasswordInput = styled(Input.Password)`
  margin-top: 40px;
  width: 80%;
  height: 50px;
  background: rgb(250, 251, 254);
  outline: none;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  padding-left: 15px;
  color: rgb(89, 90, 98);
`;
Wrapper.Button = styled.div`
  margin-top: 50px;
  width: 80%;
  height: 50px;
  border: 1px solid rgb(240, 238, 247);
  border-radius: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  color: rgb(255, 255, 255);
  padding: 0px 15px;
  background: rgb(48, 104, 204);

  ${({ warningAnimation }) =>
    warningAnimation &&
    `
    animation: rotate 0.7s ease-in-out both;
  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  `}
`;
