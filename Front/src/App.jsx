import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { ResetStyles } from "./styles/ResetStyles.js";

export const App = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ResetStyles />
        <Header />
        <div style={{ flex: 1 }}>
          <h1>Codigo Limpo</h1>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
