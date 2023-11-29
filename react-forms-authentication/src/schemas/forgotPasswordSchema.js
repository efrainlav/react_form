import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email no valido")
    .required("El mail es obligatorio"),
});
