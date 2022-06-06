import Header from "../components/Header";
import { useProtectedPage } from "../hooks/useProtectedPage";

export default function FeedPage() {
  useProtectedPage();

  return (
    <main>
      <Header isProtected={true} />
      <hr />
      <section>
        <h2> Crie um novo Post :)</h2>
      </section>
      <hr />
      <section>
        <h2> Lista de Posts</h2>
      </section>

    </main>
  );
}
