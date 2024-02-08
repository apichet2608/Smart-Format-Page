import { useState } from "react";
import CheckMode from "./Components/common/Theme/SetColorMode/SetColorMode";
import "./App.css";

import Appbar from "./Components/common/Appbar/Appbar";

function App() {
  return (
    <>
      <div className="">
        <Appbar />
        <h1 className="text-3xl flex justify-center underline underline-offset-8 bg-red-50 w-full">
          Hello world!
        </h1>
      </div>
      <div className="Paper_Contents">
        <input type="text" placeholder="123" className="input_test" />
      </div>
    </>
  );
}

export default App;
