import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const ForgotPassword = () => {
  let { setStep } = useContext(AuthContext);
  return (
    <main>
      <h3>Forgot Password</h3>
      <div className="card">
        <form action="">
          <fieldset>
            <label htmlFor="email">email</label>
            <input type="email" id="email" autoFocus />
            <p className="error">Valid email required</p>
          </fieldset>
          <button type="submit">Remember me!</button>
        </form>
      </div>
      <p>Already have an acount? <span onClick={() => setStep("signin")}>Sign In</span> </p>
    </main>
  );
};

export default ForgotPassword