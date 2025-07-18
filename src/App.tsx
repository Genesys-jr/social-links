import Profile from "./components/profile";
import Socials from "./components/socials";
import "./index.css";

function App() {
  return (
    <section className="bg-neutral-900 min-h-screen flex items-center justify-center">
      <div className="bg-neutral-800 flex flex-col justify-center mx-auto min-w-lg h-3/4 rounded-2xl ">
        <Profile />
        <Socials />
      </div>
    </section>
  );
}

export default App;
