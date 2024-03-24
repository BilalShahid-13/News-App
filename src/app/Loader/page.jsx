import React from "react";
import './page.css';

const Loader = () => {
  return (
    <div className="w-full h-screen border-pink-400 flex flex-col justify-center items-center font-mono">
      <h3 className="text-3xl text-zinc-500 font-medium">Loading</h3>
      <div className="flex flex-row space-x-7">
        <p className="text-yellow-300 transition ease-in-out delay-150 duration-300" id="p1"> &#9632;</p>
        <p className="text-teal-300 transition ease-in-out delay-300 duration-300" id="p2"> &#x25A0;</p>
        <p className=" text-indigo-300 rounded" id="p3"> &#x25A0;</p>
      </div>
    </div>
  );
};

export default Loader;
