import { Post } from "./Post.jsx";
import { Header } from "./components/Header.jsx";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar.jsx";

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
