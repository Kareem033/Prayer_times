import Prayer from "./components/prayer";
import bgImage from "./assets/bg.jpg";

function App() {
  return (
    <>
      <section className="retative flex overflow-x-hidden items-center h-screen w-screen">
        <img
          src={bgImage}
          alt="hero_image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Prayer />
      </section>
    </>
  );
}

export default App;
