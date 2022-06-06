import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useForm from "../hooks/useForm";
import { useUnrotectedPage } from "../hooks/useUnprotectedPage";
import { goToSignUpPage } from "../routes/coordinator";
import { requestLogin } from "../services/requests";

export default function LoginPage() {
  useUnrotectedPage();

  const navigate = useNavigate();

  const { form, onChange, clear } = useForm({ email: "", password: "" });

  const login = (event) => {
    event.preventDefault();

    requestLogin(form, clear, navigate);
  };

  return (
    <main>
      <Header isProtected={false} />
      <hr />

      <section>
        <h2>Login</h2>
        <form onSubmit={login}>
          <label htmlFor={"email"}>E-mail: </label>
          <input
            id={"email"}
            type={"email"}
            name={"email"}
            value={form.email}
            onChange={onChange}
          />
          <br /> <br />
          <label htmlFor={"password"}>Senha: </label>
          <input
            id={"password"}
            type={"password"}
            name={"password"}
            value={form.password}
            onChange={onChange}
          />
          <br /> <br />
          <button type={"submit"}>Entrar</button>
        </form>
      </section>
      <hr />
      <section>
        <h3> Ainda não é cadastrado? Sem problemas!</h3>
        <button onClick={() => goToSignUpPage(navigate)}>
          Cadastre-se aqui
        </button>
      </section>
    </main>
  );
}
