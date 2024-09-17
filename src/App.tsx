import Button from "./components/Button";
import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/section/Hero";
import Usps from "./components/section/Usps";
import "./styles.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main>
        <div className="bg-background">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}

export default App;
