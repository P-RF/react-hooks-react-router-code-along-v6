import NavBar from "../components/NavBar";


// About.js
function About() {
  return (
    <>
      <header>
        {/* Save space for NavBar */}
        {NavBar}
        <NavBar />
      </header>
      <main>
        <h1>This is my about component!</h1>
      </main>
    </>
  );
};

export default About;