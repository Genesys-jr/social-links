import Profile from "./components/profile";
import Socials from "./components/socials";
import "./index.css";

function App() {
  return (
    <section className="bg-neutral-900 h-screen flex items-center justify-center overflow-hidden">
      <div className="bg-neutral-800 flex flex-col justify-center w-full max-w-md mx-auto rounded-2xl p-6">
        <Profile />
        <Socials />
      </div>
    </section>
  );
}

export default App;
