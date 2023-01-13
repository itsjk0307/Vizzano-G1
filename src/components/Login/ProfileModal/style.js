import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
Wrapper.Avatar = styled.div`
  width: 80px;
  height: 80px;
  background: rgb(245, 106, 0);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-transform: capitalize;
`;
Wrapper.InputContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
Wrapper.Label = styled.label`
  color: rgba(0, 0, 0, 0.88);
  padding-bottom: 2px;
`;
Wrapper.Input = styled.input`
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: rgba(0, 0, 0, 0.04);
  padding: 4px 11px;
`;
