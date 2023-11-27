import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import InputPassword from "./InputPassword";

const SignIn = () => {
  let { setStep } = useContext(AuthContext);

  //Estado del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSubmit = (e) => {
    //evitar el envio de datos a un Backend
    e.preventDefault();
    console.log("Sending data to backend....");
    console.log(`El usuario digito: ${email} y ${password}`);
  };

  return (
    <main>
      <h3>Hello!</h3>
      <div className="card">
        <form onSubmit={handlerSubmit} autoComplete="off">
          <fieldset>
            <label htmlFor="email">email</label>
            {/* <label htmlFor="">{email}</label> */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              autoFocus
            />
            <p className="error">Valid email required</p>
          </fieldset>
          <fieldset>
            <label htmlFor="password">password:</label>
            {/* <InputPassword /> */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
            />
            <p className="error">Password is required </p>
          </fieldset>
          <button type="submit">login</button>
          <div className="forgot" onClick={() => setStep("forgot")}>
            Forgot password?{" "}
          </div>
        </form>
      </div>
      <p>
        Don't have an account?{" "}
        <span onClick={() => setStep("signup")}>Sign up</span>
      </p>
    </main>
  );
};

export default SignIn;
