import { useProtectedPage } from "../hooks/useProtectedPage";
import Header from "../components/Header";

export default function PostDetailsPage() {
  useProtectedPage();

  return (
    <main>
      <Header isProtected={true} />
      <hr />

      <section>
        <h2>Detalhes do Post</h2>
      </section>

      <hr />
      <section>
        <h2>Digite seu Comentário</h2>
      </section>

      <hr />
      <section>
        <h2>Lista de Comentários</h2>
      </section>
    </main>
  );
}
