import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BGColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff902f;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  width: 100%;
  height: 55%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

export const BottomWrapper = styled.div`
  display: flex;
  height: 45%;
  width: 100%;
  padding: 0.4375rem 1.25rem; /* 7px = 0.4375rem, 20px = 1.25rem */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  z-index: 2;
  background-color: white;
  border-radius: 1.9rem;
`;

export const LoginContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1875rem; /* 19px = 1.1875rem */
  flex-shrink: 0;
  align-self: stretch;
  z-index: 2;
`;

export const Title = styled.div`
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
`;

export const SecondTitle = styled.div`
  z-index: 2;
  width: 100%;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const LoginTitle = styled.div<{ success?: boolean }>`
  color: ${({ success = true }) => (success ? "#ff902f" : "#757575")};
  z-index: 2;
  text-align: center;
  font-family: "Helvetica Neue";
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; /* 28px = 1.75rem */
`;

export const Inputs = styled.div`
  z-index: 2;
  color: #ff902f;
  font-family: "Helvetica Neue";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: grid;
  gap: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  outline: none;
  background: transparent;
  color: #333;
  border: 0.0625rem solid #ff902f; /* 1px = 0.0625rem */
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  padding: 0.625rem 1.25rem; /* 10px = 0.625rem, 20px = 1.25rem */
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.5rem; /* 8px = 0.5rem */
  border: 0.0625rem solid #ff902f; /* 1px = 0.0625rem */
  background-color: #ff902f;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ForgotPass = styled.div`
  color: #ff902f;
  text-align: center;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Info = styled.div`
  color: #757575;
  text-align: center;
  width: 14rem; /* No change here */
  z-index: 2;
  font-family: "Helvetica Neue";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: grid;
  gap: 0.5rem;
`;
