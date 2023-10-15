import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Categories from "./components/Categories";
import FoodList from "./components/FoodList";




function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <Categories />
        <FoodList />
      </Container>
    </>
  );
}

export default App;
