import Profile from "./components/profile";
import Socials from "./components/socials";
import "./index.css";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-neutral-800 flex flex-col justify-center items-center mx-auto text-center w-full max-w-lg rounded-2xl p-6  ">
        <Profile />
        <Socials />
      </div>
      <div className="absolute bottom-0 text-white text-sm p-4">
        Challenge by{" "}
        <a
          className="underline text-blue-700"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="underline text-blue-700"
          href="https://github.com/Genesys-jr"
        >
          Amon K. Daniel
        </a>
        .
      </div>
    </div>
  );
}

export default App;
