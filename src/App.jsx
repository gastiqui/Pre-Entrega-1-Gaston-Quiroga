import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos!"} />
      <Footer />
    </div>
  );
}

export default App;
