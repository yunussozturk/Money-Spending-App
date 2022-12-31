import './App.css';
import Container from  "./components/Container";
import {FilterProvider} from "./context/FilterContext";

function App() {
  return (
    <FilterProvider>
      <Container />
    </FilterProvider>
  )
}
export default App;