"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Categories } from "../../../constants";

const Navbar = () => {
  const [searchbar, setsearchbar] = useState(false);
  const [menubtn, setmenubtn] = useState(false);
  const [cataloguebtn, setcataloguebtn] = useState(false);
  const [input, setinput] = useState("");
  const [click, setclick] = useState("");

  const router = useRouter();

  return (
    <>
      <main className="select-none font-sans max-md:flex max-md:flex-col">
        <nav className=" w-full flex flex-row bg-white justify-between items-center px-2 py-3 shadow-md max-md:flex max-md:flex-col">
          {/* News Agency */}
          <div className="max-md:py-2 flex max-md:flex-row max-md:justify-between max-md:w-full">
            {/* menu button */}
            <i
              className="bi bi-list max-md:font-bold hidden max-md:flex"
              onClick={() => {
                menubtn ? setmenubtn(false) : setmenubtn(true);
              }}
            ></i>
            <Link
              href="/Latest"
              className="flex flex-row gap-2 max-md:text-xl max-md:w-[70%] text-zinc-800"
            >
              <h1>News Agency</h1>
              <i className="bi bi-newspaper scale-125 max-lg:scale-100 flex justify-center items-center max-md:text-xl"></i>
            </Link>
          </div>

          {/* Menu */}
          <div
            className={`transition-opacity ease-in duration-300 pb-2 max-md:h-0 max-md:opacity-0 max-md:overflow-hidden ${
              menubtn ? "max-md:h-full max-md:opacity-100" : ""
            }`}
          >
            <ul className="flex flex-row justify-between items-center gap-3 max-md:flex-col text-zinc-800">
              <li
                className={`navbar_elements ${
                  click === "Home"
                    ? "cursor-pointer bg-[#fbbf24] rounded-full delay-300 ease-in-out duration-100 shadow-md"
                    : ""
                }`}
                onClick={() => {
                  setclick("Home");
                  document.querySelector("#ul_btn").classList.remove("ul_btn");
                }}
              >
                <Link href="/" className="navbar_elements text-zinc-800">
                  Home
                </Link>
              </li>
              <li
                className="navbar_elements flex relative max-md:justify-center max-md:items-center max-md:flex-col"
                id="categories"
                onClick={() => {
                  setcataloguebtn(true);
                  cataloguebtn ? setcataloguebtn(false) : setcataloguebtn(true);
                }}
              >
                <button
                  className="transition ease-in-out duration-600 hover:shadow-md"
                  id="ul_btn"
                >
                  Categories
                </button>
                <ul
                  className={`dropdown transition ease-in duration-300 max-md:h-0 max-md:opacity-0 max-md:overflow-hidden ${
                    cataloguebtn ? "max-md:h-full max-md:opacity-100" : ""
                  }
              max-md:justify-center max-md:items-center max-md:text-center max-md:space-y-2 max-md:mt-2`}
                  id="inner-categories"
                >
                  {Categories.map((lists) => (
                    <li
                      key={lists.title}
                      className={`dropdown-li rounded text-zinc-500 transition ease-in duration-300 ${
                        click === lists.title ? "" : ""
                      }`}
                      onClick={() => {
                        setclick(lists.title);
                        const i = document.querySelector("#ul_btn");
                        i.textContent = lists.title;
                        i.classList.toggle("ul_btn");
                      }}
                    >
                      <Link href={lists.Link}>{lists.title}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={`navbar_elements ${
                  click === "About"
                    ? "cursor-pointer bg-[#fbbf24] rounded-full delay-300 ease-in-out duration-100 shadow-md"
                    : ""
                }`}
              >
                <Link
                  href="/About"
                  onClick={() => {
                    setclick("About");
                    document
                      .querySelector("#ul_btn")
                      .classList.remove("ul_btn");
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* search */}
          <div>
            <div
              className={`ease-in-out duration-100 bg-amber-50 rounded flex flex-row justify-center items-center py-[5px] ${
                searchbar
                  ? "border-2 border-[var(--search-color)]"
                  : "border-0 border-transparent"
              }`}
            >
              <i
                className="bi bi-search px-2 text-zinc-800"
                onClick={() => {
                  router.push(`/components/categories/${input}`);
                  setinput("");
                }}
              ></i>
              <input
                type="search"
                placeholder="Type to Search..."
                className="transition ease-in duration-300  outline-none bg-transparent"
                onClick={() => setsearchbar(true)}
                value={input}
                onChange={(e) => {
                  setinput(e.target.value);
                }}
              />
            </div>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Navbar;
