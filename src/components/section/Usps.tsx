import Container from "../Container";
import Fade from "../Fade";

const Usps = () => {
  return (
    <Container className="border-red relative max-w-[692px] space-y-12 border py-36 text-4xl font-bold text-white">
      <Fade>
        <p>New Apple Originals every month — always ad‑free.</p>
      </Fade>
      <Fade>
        <p>
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
      </Fade>
      <Fade>
        <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
      </Fade>
      <Fade>
        <p>Share a single subscription with up to five people.</p>
      </Fade>
    </Container>
  );
};

export default Usps;
