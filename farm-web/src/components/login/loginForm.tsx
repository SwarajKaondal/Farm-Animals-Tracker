import React, { useContext, useEffect, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, LineText, MutedText, SubmitButton } from "./common";
import { AccountContext } from "./accountContext";
import { doLogin } from "../../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../../reducers/rootReducer";

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validInput, isValidInput] = useState(true);
  const [showError, setShowError] = useState(false);
  const loginObj = useSelector((state: IRootReducer) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowError(false);
  }, []);

  const handleSignIn = () => {
    setShowError(true);
    if (email.length === 0 || password.length === 0) {
      isValidInput(false);
    } else {
      isValidInput(true);
      dispatch(doLogin({ email, password }));
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input onChange={(event) => setEmail(event.target.value)} type="email" placeholder="Email" />
        <MutedText style={{ display: !validInput && email.length === 0 ? "block" : "none" }}>Enter a valid email</MutedText>
        <Input onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Password" />
        <MutedText style={{ display: !validInput && password.length === 0 ? "block" : "none" }}>Password cannot be empty</MutedText>
      </FormContainer>
      <MutedText style={{ display: showError && loginObj.loginError !== "" ? "block" : "none" }}>{loginObj.loginError}</MutedText>
      <span style={{ display: "flex", height: "1.6em" }}></span>
      <SubmitButton onClick={handleSignIn} type="submit">
        {loginObj.loading ? "loading..." : "Sign In"}
      </SubmitButton>
      <span style={{ display: "flex", height: "5px" }}></span>
      <LineText>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
