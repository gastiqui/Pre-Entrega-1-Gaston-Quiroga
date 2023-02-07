import NavBar from "./components/NavBar";
import ItemListContainer from "./ItemListContainer";
import Footer from "./components/footer";

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
