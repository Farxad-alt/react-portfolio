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
  ScrollToTop,
  ThemeToggle,
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
      <ScrollToTop />
      <ThemeToggle />
    </>
  );
}

export default App;
