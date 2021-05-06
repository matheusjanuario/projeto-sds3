import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

// Representa um componentes do Frontend React, que é informado no arquivo Index.tsx
function App() {
  return (
    <>
      <NavBar />
      <div className = "container">
        <h1 className="text-primary">Olá Mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
