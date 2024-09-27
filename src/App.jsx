import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Choice from "./components/Choice";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex h-screen content-center items-center justify-center pb-32 pt-16">
      <div className="absolute top-0 w-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <Navbar />
            <h1 className="w-full flex justify-center lg text-3xl font-semibold px-4 leading-relaxed text-white dark:text-white">
              Sistem Penilaian Kinerja Karyawan
            </h1>
            <div className="w-full flex justify-center py-24">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
