import React, { useState } from "react";
import "../styles.css";
import { Form } from "../components/form";
import { Input } from "../components/input";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
  height: 5em;
  margin-bottom: 1em;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.div`
  font-size: 18px;
  margin-bottom: 8px;
  color: #4d4d4d;
`;

const Login = () => {
  const [auth, setAuth] = useState(null);
  const [cred, setCred] = useState(null);

  const navigate = useNavigate();

  const url = "https://api.test.aqua-delivery.ru/v1/auth/login";

  function onLogin(auth) {
    setAuth(auth);
    navigate("/Messages");
  }

  const handleSubmit = async (values) => {
    await axios
      .post(url, {
        login: values.username,
        password: values.password,
      })
      .then((resp) => {
        if (resp.data.success === true) {
          onLogin(true);
        }
        if (resp.data.success === false) {
          setCred(resp.data.message);
        }
      })
      .catch((err) => {
        navigate("/errorpage");
      });
  };

  return (
    <div className="App">
      <div className="App__Box">
        <h1 className="App__Name">Pockets</h1>
        <p className="App__Welcome">Welcome to Pockets!👋🏻</p>
        <p className="App__Align">
          Please sign-in to your account and start the <br /> adventure
        </p>
        <div className="App__Form">
          <Form onSubmit={handleSubmit}>
            {(props) => (
              <FormWrapper>
                <Group>
                  <Label>Email</Label>

                  <Input
                    className="InputBox"
                    name="username"
                    placeholder="johndoe@gmail.com"
                  />
                </Group>
                <Group>
                  <Label>Password</Label>
                  <Input
                    className="InputBox"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                </Group>
                <Group>
                  <button type="submit" className="App__Button">
                    Login
                  </button>
                </Group>
                {cred && <p className="App__Error">{cred}</p>}
              </FormWrapper>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
