import Header from "./components/Navbar";

import geminiContext from "../store/react-store";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
function App() {
  return (
    <geminiContext.Provider value="">
      <div className="flex">
        <Sidebar />
        <div className="flex  flex-col h-[100vh] w-[100%]">
          <Header />
          <Hero />
        </div>
      </div>
    </geminiContext.Provider>
  );
}

export default App;
