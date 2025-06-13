import BottomBar from "./components/layout/BottomBar";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
  
      <Navbar />
      <main >
        <AppRoutes />
      </main>
      <BottomBar />
    </>
  );
}

export default App;
