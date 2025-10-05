import {
  Header,
  Footer,
  Home,
  About,
  Portfolio,
  Contact,
  SkillsInfo,
  Services,
  Clients,
  GetInTouch,
} from "./components/index";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetInTouch />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
