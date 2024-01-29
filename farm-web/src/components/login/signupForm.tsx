import React, { useContext, useEffect, useState } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, LineText, MutedText, SubmitButton } from "./common";
import { AccountContext } from "./accountContext";
import { doSignup } from "../../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "../../reducers/rootReducer";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const [loginCredentials, setLoginCredentials] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showError, setShowError] = useState(false);
  const [validInput, isValidInput] = useState(true);
  const loginObj = useSelector((state: IRootReducer) => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowError(false);
  }, []);

  const handleSignup = () => {
    setShowError(true);
    if (
      loginCredentials.password !== loginCredentials.confirmPassword ||
      loginCredentials.password.length === 0 ||
      loginCredentials.name.length === 0 ||
      !validateEmail(loginCredentials.email)
    ) {
      isValidInput(false);
    } else {
      isValidInput(true);
      dispatch(doSignup(loginCredentials));
    }
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          onChange={(event) => setLoginCredentials((creds) => Object.assign({ ...creds, name: event.target.value }))}
          type="text"
          placeholder="Full name"
        />
        <MutedText style={{ display: !validInput && loginCredentials.name.length === 0 ? "block" : "none" }}>Name cannot be empty</MutedText>
        <Input
          onChange={(event) => setLoginCredentials((creds) => Object.assign({ ...creds, email: event.target.value }))}
          type="email"
          placeholder="Email"
        />
        <MutedText style={{ display: !validInput && !validateEmail(loginCredentials.email) ? "block" : "none" }}>Enter a valid email</MutedText>
        <Input
          onChange={(event) => setLoginCredentials((creds) => Object.assign({ ...creds, password: event.target.value }))}
          type="password"
          placeholder="Password"
        />
        <Input
          onChange={(event) => setLoginCredentials((creds) => Object.assign({ ...creds, confirmPassword: event.target.value }))}
          type="password"
          placeholder="Confirm password"
        />
        <MutedText
          style={{
            display:
              !validInput && (loginCredentials.password !== loginCredentials.confirmPassword || loginCredentials.password.length === 0)
                ? "block"
                : "none",
          }}
        >
          Password does not match
        </MutedText>
      </FormContainer>
      <MutedText style={{ display: showError && loginObj.signupError !== "" ? "block" : "none" }}>{loginObj.signupError}</MutedText>
      <span style={{ display: "flex", height: "10px" }}></span>
      <SubmitButton onClick={handleSignup} type="submit">
        {loginObj.loading ? "loading..." : "Sign Up"}
      </SubmitButton>
      <span style={{ display: "flex", height: "5px" }}></span>
      <LineText>
        Already have an account?{" "}
        <BoldLink onClick={switchToSignin} href="#">
          Signin
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}
