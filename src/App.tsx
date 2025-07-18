import Profile from "./components/profile";
import Socials from "./components/socials";
import "./index.css";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Container */}
      <div className="bg-neutral-800 flex flex-col justify-center items-center text-center w-full max-w-md rounded-2xl p-6 sm:p-8">
        <Profile />
        <Socials />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-1.5 text-white text-xs sm:text-sm text-center ">
        Challenge by{" "}
        <a
          className="underline text-blue-500 hover:text-blue-400"
          href="https://www.frontendmentor.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="underline text-blue-500 hover:text-blue-400"
          href="https://github.com/Genesys-jr"
        >
          Amon K. Daniel
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
