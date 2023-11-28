import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { RoutesMain } from "./routes/index.jsx";
import { ResetStyles } from "./styles/ResetStyles.js";

export const App = () => {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ResetStyles />
        <Header />
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
        <div style={{ flex: 1 }}></div>
        <Footer />
      </div>
    </>
  );
};

export default App;
