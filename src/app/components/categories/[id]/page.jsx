"use client";
import Loader from "@/app/Loader/page";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { useState, useEffect } from "react";

const page = ({ params }) => {
  const [data, setdata] = useState([]);
  const url = `https://newsapi.org/v2/everything?q=${params.id}&apiKey=626e4d22bfaa4e45b57be27eb0d85c42`;
  // const url = `https://newsapi.org/v2/top-headlines?country=us&category=${cat.searchParams.props}&apiKey=626e4d22bfaa4e45b57be27eb0d85c42`;
  // const url = `https://newsdata.io/api/1/news?apikey=pub_396223e5665d3bd461554f8878f499ce4e3b7&q=${params.id}`;

  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchData();
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }, []);

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await fetch(url);
      const data = await response.json();
      setdata(data.results || data.articles);
      console.log(data.results || data.articles);
      console.log(data.articles.length);
    } catch (error) {
      console.error("Error fetching news:", error.message);
    } finally {
      setloading(false);
    }
  };

  return (
    <main className="latest-news">
      {loading ? (
        <Loader />
      ) : (
        <div className="transition ease-in duration-300 grid grid-cols-4 gap-4 px-3 my-3 max-md:grid-cols-1 max-lg:grid-cols-2">
          {data.length > 0
            ? data.map((card, index) => (
                <div
                  className="flex flex-col h-full shadow-md rounded relative"
                  key={index}
                >
                  <img
                    src={
                      (card.urlToImage !== null &&
                        card.urlToImage !== undefined &&
                        typeof card.urlToImage === "string" &&
                        card.urlToImage.trim() !== "") ||
                      card.image_url
                        ? card.urlToImage || card.image_url
                        : "page-not-found.avif"
                    }
                    // alt={no_img(card)}
                    className="h-[100%] w-full rounded border-[1px] border-slate-400"
                  />
                  <h3>{card.title}</h3>
                  <div className="w-[41%] py-3">
                    <Link
                      href={`/pages/${card.link || card.url}`}
                      className="bg-yellow-300 py-2 rounded px-2 ml-1"
                    >
                      Read More
                      <i className="bi bi-chevron-double-right mx-2"></i>
                    </Link>
                  </div>
                </div>
              ))
            : notFound}
        </div>
      )}
    </main>
  );
};

export default page;
