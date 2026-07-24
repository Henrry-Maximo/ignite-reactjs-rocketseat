interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      {/* <strong>{props.repository?.name ?? "Default"}</strong> */}
      {/* <strong>{props.repository.name ?? "Default"}</strong> */}
      <strong>{props.repository.name}</strong>
      {/* <p>Forms in React</p> */}
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}

// {
//   props: {
//     repository: "unforme"
//   }
// }
