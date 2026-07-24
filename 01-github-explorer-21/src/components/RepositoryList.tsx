import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

// https://api.github.com/users/henrry-maximo/repos

// const repository = {
//   name: 'unform',
//   description: 'Forms in React',
//   link: 'https://github.com/unform/unform'
// }

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/henrry-maximo/repos')
    .then((response) => response.json())
    .then((data) => setRepositories(data))
    // .then((data) => console.log(data));
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        {/* <RepositoryItem 
          repository={repository}
          // description="Forms in React" 
          // link="https://github.com/unform/unform" 
        />
        <RepositoryItem 
          repository={repository}
        />
        <RepositoryItem 
          repository={repository}
        /> */}     
        {/* <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositório</a>
        </li> */}
      </ul>
    </section>
  );
}