import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function SignupForm(props) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("ce champ est obligatoire")
      .min(2, "trop petit!")
      .max(50, "trop long!"),
    email: Yup.string()
      .email("email invalide")
      .required("l'email est obligatoire"),
    password: Yup.string()
      .required("Mot de passe est obligatoire")
      .matches(/([0-9])/, "Au moins un entier")
      .min(3, "Mot de passe doit être plus grand que 2 caractères")
      .max(50, "Mot de passe doit être plus petit que 50 caractères"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Le mot de passe de confirmation ne correspond pas"
    ),
    acceptTerms: Yup.bool().oneOf(
      [true],
      "Accepter les conditions est obligatoire"
    ),
  });

  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onTouched",
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    props.addNewUser(data)
    reset();
  };

    const onLogin = () => {
      props.onLogin(true);
    };

 
  return (
    <div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center">Inscription</h2>
              <div className="form-group mb-3">
                <label htmlFor="name">Nom Complet:</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name")}
                />
                <small className="text-danger">{errors.name?.message}</small>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  {...register("email")}
                />
                <small className="text-danger">{errors.email?.message}</small>
              </div>

              <div className="form-group mb-3">
                <label htmlFor="password">password:</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("password")}
                />
                <small className="text-danger">
                  {errors.password?.message}
                </small>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="confirmPassword">confirmPassword:</label>
                <input
                  type="password"
                  className="form-control"
                  {...register("confirmPassword")}
                />
                <small className="text-danger">
                  {errors.confirmPassword?.message}
                </small>
              </div>
              <div className="form-check">
                <label htmlFor="acceptTerms" className="form-check-label">
                  J'ai lu et j'accepte les conditions
                </label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("acceptTerms")}
                  name="acceptTerms"
                />
                <small className="text-danger d-block">
                  {errors.acceptTerms?.message}
                </small>
              </div>
              <div className="btn-group d-flex justify-content-md-end mt-5">
                <button type="submit" className="btn btn-primary">
                  S'inscrire
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => reset()}
                >
                  Annuler
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => onLogin()}
                >
                  Se Connecter
                </button>
              </div>
            </form>
    </div>
  );
}

export default SignupForm;

