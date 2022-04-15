import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function LoginForm(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("email invalide")
      .required("l'email est obligatoire"),
    password: Yup.string().required("Mot de passe est obligatoire"),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;
const onSubmit = (data) => { props.loginUser(data)}
const onSignup = () => {}

  return (
    <div>
      <h2 className="text-center">Connexion</h2>

      <div className="form-group justify-content-end">
        <label htmlFor="email">Email:</label>
        <input type="email" className="form-control" {...register("email")} />
        <small className="text-danger">{errors.email?.message}</small>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3 ">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            {...register("password")}
          />
          <small className="text-danger">{errors.password?.message}</small>
        </div>
        <div className="btn-group d-flex justify-content-md-end">
          <button type="submit" className="btn btn-primary  ">
            Se Connecter
          </button>
        </div>
        <div className="row mt-5">
          Vous n'avez pas de compte ?
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => onSignup()}
          >
            S'inscrire
          </button>
        </div>
      </form>

      {/* </div> */}
    </div>
  );
}

export default LoginForm;
