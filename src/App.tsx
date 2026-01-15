import Hero from "./components/sections/Hero";
import Comparison from "./components/sections/Comparison";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="safety">
          <Hero />
        </div>
        <div id="comparison">
          <Comparison />
        </div>
      </main>
    </>
  );
}

export default App;
