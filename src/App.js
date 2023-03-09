import { CardList } from "./components";
import data from "./data/data.json";

function App() {
  return <CardList users={data} />;
}

export default App;
