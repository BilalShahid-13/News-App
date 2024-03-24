"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Categories } from "../../../constants";

const Footer = () => {
  const [about, setabout] = useState(false);
  const [categories, setcategories] = useState(false);
  return (
    <footer className="select-none w-full">
      {/* shadow-[rgba(0,0,15,0.1)_0px_0px_10px_10px] */}
      <div className="grid grid-cols-3 max-md:grid-cols-1">
        {/* intro */}
        <div className="bg-red-300 flex justify-center items-center flex-col">
          <div className="flex flex-row gap-3">
            <i className="bi bi-newspaper scale-125"></i>
            <h1 className=" font-bold">News Agency</h1>
          </div>
        </div>
        {/* about */}
        <div className="transition ease-in duration-300 bg-green-200 flex flex-col justify-center items-center">
          <h1
            className="font-bold max-md:flex max-md:w-full max-md:justify-center"
            onClick={() => {
              about ? setabout(false) : setabout(true);
            }}
          >
            About
          </h1>
          <ul
            className={`transition ease-in duration-300 flex flex-col justify-center items-center h-full max-md:h-0 max-md:opacity-0 max-md:overflow-hidden ${
              about ? "max-md:h-full max-md:opacity-100" : ""
            }`}
          >
            <li className="font-thin">
              <Link href="/">About Us</Link>
            </li>
            <li className="font-thin">
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        {/* categories */}
        <div className="transition ease-in duration-300 bg-amber-200 flex flex-col justify-center items-center">
          <h1
            className="font-bold max-md:flex max-md:w-full max-md:justify-center"
            onClick={(e) => {
              categories ? setcategories(false) : setcategories(true);
              console.log(e.target);
            }}
          >
            Categories
          </h1>
          <ul
            className={`transition ease-in duration-300 flex flex-col justify-center items-center h-full max-md:h-0 max-md:opacity-0 max-md:overflow-hidden ${
              categories ? "max-md:h-full max-md:opacity-100" : ""
            }`}
          >
            {Categories.map((m) => {
              return (
                <div key={m.title}>
                  <li className="font-thin text-zinc-800">
                    <Link href={m.Link}>{m.title}</Link>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-row justify-between px-2 bg-zinc-100">
        <p>News Agency 2024</p>
        <p>All Rights Reserved &#xae;</p>
      </div>
    </footer>
  );
};

export default Footer;
