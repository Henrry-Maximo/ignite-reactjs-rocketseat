import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem 
          repository={repository}
          // description="Forms in React" 
          // link="https://github.com/unform/unform" 
        />
        <RepositoryItem 
          repository={repository}
        />
        <RepositoryItem 
          repository={repository}
        />
        <RepositoryItem 
          repository={repository}
        />

        {/* <li>
          <strong>unform</strong>
          <p>Forms in React</p>

          <a href="">Acessar repositório</a>
        </li> */}
      </ul>
    </section>
  );
}