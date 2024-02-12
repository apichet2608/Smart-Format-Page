import { useState } from "react";
import "./App.css";

import Appbar from "./Components/common/Appbar/Appbar";

function App() {
  return (
    <>
      <div className="">
        <Appbar />
        <h1 className="text-3xl flex justify-center underline-offset-8 bg-blue-50 w-full text-black">
          Hello world!
        </h1>
      </div>
      <div className="Paper_Contents">
        <input type="text" placeholder="123" />
      </div>
    </>
  );
}

export default App;
