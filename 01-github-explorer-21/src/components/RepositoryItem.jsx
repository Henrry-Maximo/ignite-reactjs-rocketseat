export function RepositoryItem(props) {
  return (
    <li>
      {/* <strong>{props.repository?.name ?? "Default"}</strong> */}
      <strong>{props.repository.name ?? "Default"}</strong>
      {/* <p>Forms in React</p> */}
      <p>{props.repository.description}</p>

      <a href={props.repository.link}>Acessar repositório</a>
    </li>
  );
}

// {
//   props: {
//     repository: "unforme"
//   }
// }
