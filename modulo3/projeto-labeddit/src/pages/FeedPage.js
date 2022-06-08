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

  const { states, getters } = useContext(GlobalStateContext);

  const { posts } = states;

  const { getPosts } = getters;

  useEffect(() => {
    getPosts();
  }, []);

  const createPost = (event) => {
    event.preventDefault();

    requestCreatePost(form, clear, getPosts);
  };

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
        {showPosts}
      </section>
    </main>
  );
}
