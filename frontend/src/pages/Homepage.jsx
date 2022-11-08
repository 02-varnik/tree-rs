import { Link } from "react-router-dom";
function LandingPageButton() {
  return (
    <Link to="/about" class="nav-link">
      <button class="btn btn-primary">
        <span style={{ "font-size": "24px" }}>Click Me!</span>
      </button>
    </Link>
  );
}
function LandingFrameMessage() {
  const style = {
    margin: "auto",
    padding: "6% 10% 10% 15%",
    color: "white",
  };
  return (
    <div style={style}>
      <div
        style={{
          "font-size": "70px",
          color: "black",
          textAlign: "center",
          "font-family": "Georgia",
        }}
      >
        Tree r
      </div>

      <div style={{ "font-size": "36px", color: "black", textAlign: "center" }}>
        recycling made convenient
      </div>
      <br />
      <LandingPageButton />
    </div>
  );
}
function LandingFrame() {
  const style = {
    "background-image": `url("images/background.jpg")`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "110%",
    width: "100%",
  };
  return (
    <div style={style}>
      <LandingFrameMessage />
    </div>
  );
}
function HomePage() {
  return (
    <div>
      <LandingFrame />
    </div>
  );
}
export default HomePage;
