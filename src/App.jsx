import Prayer from "./components/prayer";

function App() {
  return (
    <>
      <section className="retative flex items-center min-h-screen w-screen">
        <img
          src="bg.jpg"
          alt="hero_image"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <Prayer />
      </section>
    </>
  );
}

export default App;
