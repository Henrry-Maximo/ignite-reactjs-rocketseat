import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';


export function App() {
  // throw new Error("Catch me");

  return (
    // <h1>Helllo</h1>
    <>
      <RepositoryList />
      {/* <Counter /> */}
    </>
  )
}