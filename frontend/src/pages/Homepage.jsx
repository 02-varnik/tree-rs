// import { Link } from "react-router-dom";
// function LandingPageButton() {
//   return (
//     <Link to="/about" class="nav-link">
//       <button class="btn btn-primary">
//         <span style={{ "font-size": "24px" }}>Click Me!</span>
//       </button>
//     </Link>
//   );
// }
// function LandingFrameMessage() {
//   const style = {
//     margin: "auto",
//     padding: "6% 10% 10% 15%",
//     color: "white",
//   };
//   return (
//     <div style={style}>
//       <div
//         style={{
//           "font-size": "70px",
//           color: "black",
//           textAlign: "center",
//           "font-family": "Georgia",
//         }}
//       >
//         Tree r
//       </div>

//       <div style={{ "font-size": "36px", color: "black", textAlign: "center" }}>
//         recycling made convenient
//       </div>
//       <br />
//     </div>
//   );
// }
// function
// LandingFrame() {
//   const style = {
//     "background-image": `url("images/background.jpg")`,
//     "background-repeat": "no-repeat",
//     "background-size": "cover",
//     position: "absolute",
//     height: "110%",
//     width: "100%",
//   };
//   return (
//     <div style={style}>
//       <LandingFrameMessage />
//     </div>
//   );
// }
// function HomePage() {
//   return (
//     <div>
//       <LandingFrame />
//     </div>
//   );
// }
// export default HomePage;

import { Link } from "react-router-dom";
import landingpageheaderImg from "./../assets/bg3.jpg";
import landingpageaboutImg from "./../assets/bg4.jpg";

function HomePage(props) {
  let route = "";
  if (props.isLoggedin) route = "/history";
  else route = "/login";
  return (
    <div>
      <div className="w-screen h-[90vh] md:flex overflow-hidden">
        <div className="md:w-[40vw] md:h-full w-screen h-[40vh] p-20 items-center flex justify-center">
          <div>
            <div className="flex justify-center my-3 text-6xl font-black text-green-900">
              Tree r
            </div>
            <div className="flex justify-center my-3 text-2xl">
              Recycling made convenient
            </div>
            <div className="flex justify-center ">
              <Link to={route} className="font-bold text-green-900">
                <button className="px-3 py-2 my-3 bg-green-300 rounded-full">
                  {props.isLoggedin ? "History" : "Login/SignUp"}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <img
          className="md:w-[60vw] mt-1 z-0 w-full h-[50vh] md:h-[90vh]"
          src={landingpageheaderImg}
          alt="landing page IMG"
        />
      </div>

      <div className="w-screen md:h-[60vh] md:flex overflow-hidden">
        <img
          className="md:w-[40vw] md:block hidden mt-1 z-0 w-full h-[50vh] md:h-[60vh]"
          src={landingpageaboutImg}
          alt="landing page IMG"
        />
        <div className="md:w-[60vw] md:h-full w-screen p-20 items-center flex justify-center">
          <div>
            <div className="flex justify-center text-5xl font-black text-green-900 my-7">
              What do we do?
            </div>
            <div className="flex justify-center my-3 text-lg text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
