import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import GlobalStateContext from "../global/GlobalStateContext";
import useForm from "../hooks/useForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { requestCreatePost } from "../services/requests";

export default function FeedPage() {
  useProtectedPage();

  const { form, onChange, clear } = useForm({ title: "", body: "" });

  const { states, setters, getters } = useContext(GlobalStateContext);

  const { posts, page, isLoading } = states;

  const { setPage } = setters;

  const { getPosts } = getters;

  useEffect(() => {
    getPosts(page);
  }, []);

  const createPost = (event) => {
    event.preventDefault();

    requestCreatePost(form, clear, getPosts);
  };

  const changePage = (sum) => {
    const nextPage = page + sum;

    setPage(nextPage);
    getPosts(nextPage);
  }

  const showPosts = posts.length && posts.map((post) => {
      return ( 
        <PostCard 
          key={post.id} 
          post={post} 
          isFeed={true} /> );
    });

  return (
    <main>
      <Header 
        isProtected={true} />
      <hr />
      <section>
        <h2> = Crie um novo Post =</h2>
        <form onSubmit={createPost}>
          <label htmlFor={"title"}> Título: </label>
          <input
            id={"title"}
            name={"title"}
            value={form.title}
            onChange={onChange}
            pattern={"^.{5,}$"}
            title={"Título deve ter no mínimo 5 caracteres"}
            required
          />
          <br /> <br />
          <label htmlFor={"body"}>Texto do Post: </label>
          <input
            id={"body"}
            name={"body"}
            type={"text"}
            value={form.body}
            onChange={onChange}
            pattern={"^.{10,}$"}
            title={"Post deve ter no mínimo 5 caracteres"}
            required
          />

          <br /> <br />
          <button type={"submit"}>Postar</button>
        </form>
      </section>
      <hr />
      <section>
        <h2> Lista de Posts</h2>
        <nav>
          <h3>Navegue entre as páginas</h3>
          {page !== 1 && 
            <button onClick={() => changePage(-1)}>Voltar Página</button>
          }
          <span>Página {page} </span>
          {posts.length &&
            <button onClick={() => changePage(1)}>Próxima Página</button>
          }
        </nav>
        <hr/>
        {isLoading ? <p>Arrumando os Posts...</p> : showPosts}
      </section>
    </main>
  );
}
