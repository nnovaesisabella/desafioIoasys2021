/*eslint-disable*/

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Api from "../../services/Api";
import { Input, ContainerAcess, ButtonAcess, ContainerForms } from "./style";
import { login, error } from "../../redux/userSlice";
import { useHistory } from "react-router";

export const InputsContents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMessage] = useState("");
  const [poupupMsg, setPoupupMsg] = useState(false);

  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();

  const history = useHistory();

  //Função que válida o Email, atrávez da sua mascara exemple@teste.com.br
  const isValidEmail = (email) => {
    /*eslint-disable*/
    let reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;
    return reg.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    setPoupupMsg(false);

    if (!email && !password) {
      setMessage("Email ou senha Inválida!");
      setPoupupMsg(true);
    }
    if (password.length == 0) {
      setMessage("Digite sua senha!");
      setPoupupMsg(true);
    }

    if (email.length > 0) {
      if (!isValidEmail(email)) {
        setMessage("Email não é valido ");
        setPoupupMsg(true);
      }
    }

    //ajax axios fetch

    await Api.post("/auth/sign-in", {
      email: email,
      password: password,
    })
      .then((response) => {
        const { data, headers } = response;
        dispatch(login({ user: { ...data } }));
        localStorage.setItem("refresh", headers["refresh-token"]);
        localStorage.setItem("auth", ` Bearer ${headers.authorization}`);
      })
      .catch((erro) => dispatch(error({ error: { ...erro } })));

    if (user) {
      history.push("/books");
    } else {
      history.push("/");
    }
  };

  return (
    <ContainerForms>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          placeholder="Email"
          type="text"
          name="email"
          autocomplete="off"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContainerAcess>
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonAcess type="submit"> Entrar</ButtonAcess>
        </ContainerAcess>
      </form>
      {poupupMsg ? <div>{msg}</div> : null}
    </ContainerForms>
  );
};
