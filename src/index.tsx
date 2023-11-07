// @ts-ignore
window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = { isDisabled: true };

import "./index.css";
import "flowbite";
import * as React from "react";
import ReactDOM from "react-dom/client";
import hotdog1 from "./hotdog_1.jpg";
import hotdog2 from "./hotdog_in_china.jpg";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Hotdogs without buns
          </h1>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900"></h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <img className="mx-auto" src={hotdog1} />
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900"></h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <img className="mx-auto" src={hotdog2} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Example />);
