import { useContext } from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import AuthContext from "../context/AuthContext";

import { signUpSchema } from "../schemas/signUpSchema";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirm: "",
  framework: "",
  terms: "false",
};

const SignUp = () => {
  let { setStep } = useContext(AuthContext);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <main>
      <h3>Welcome, Join Us!</h3>
      <div className="card">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={signUpSchema}
        >
          <Form autoComplete="off">
            <fieldset>
              <label htmlFor="fullName">Full name</label>
              <Field name="fullname" id="fullName" type="text" />
              {/* <input type="text" id="fullName" /> */}
              <ErrorMessage
                name="fullname"
                component="p"
                className="error-message"
              />

              {/* <p className="error-message">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="email">email</label>
              <Field name="email" id="email" type="email" />
              {/* <input type="email" id="email" /> */}
              <ErrorMessage 
              name="email"
              component="p"
              className="error-message"/>
              {/* <p className="error">Valid email required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="password">password</label>
              <Field name="password" id="password" type="password" />
              {/* <input type="password" id="password" /> */}
              <ErrorMessage
                name="password"
                component="p"
                className="error-message"
              />
              {/* <p className="error">Password is required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="confirm">Confirm password</label>
              <Field name="confirm" id="confirm" type="password" />
              {/* <input type="password" id="confirm" /> */}
              <ErrorMessage
                name="confirm"
                component="p"
                className="error-message"
              />
              {/* <p className="error">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="framework">Favorite Framework</label>
              <Field name="framework" id="framework" as="select">
                <option value="">Select your Framework </option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="Angular">Angular</option>
              </Field>
              <ErrorMessage
                name="framework"
                component="p"
                className="error-message"
              />
              {/* <p className="error">required</p> */}
            </fieldset>
            <fieldset>
              <label htmlFor="terms">
                <Field name="terms" id="terms" type="checkbox" />
                Accept terms and conditions
              </label>
              <ErrorMessage
                name="terms"
                component="p"
                className="error-message"
              />
              {/* <p className="error error-terms">required</p> */}
            </fieldset>
            <button type="submit">Register</button>
          </Form>
        </Formik>
      </div>
      <p>
        Already have an acount?{" "}
        <span onClick={() => setStep("signin")}>Sign In</span>{" "}
      </p>
    </main>
  );
};

export default SignUp;
