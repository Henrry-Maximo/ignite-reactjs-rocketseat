import { Post } from "./components/Post.jsx";
import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";

import styles from "./App.module.css";
import "./global.css";


// JSX = JavaScript + XML
export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem numquam eveniet iusto dolorem ipsa ipsam id soluta distinctio est, laudantium magnam, nisi tempore, dicta quibusdam explicabo perspiciatis possimus blanditiis. Quis."
          />
          <Post
            author="Henrique Maximo"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem numquam eveniet iusto dolorem ipsa ipsam id soluta distinctio est, laudantium magnam, nisi tempore, dicta quibusdam explicabo perspiciatis possimus blanditiis. Quis."
          />
        </main>
      </div>
    </>
  );
}
