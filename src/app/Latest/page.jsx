"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/page";

const LatestNews = () => {
  const [data, setdata] = useState([]);
  // const url = 'https://newsdata.io/api/1/news?apikey=pub_396223e5665d3bd461554f8878f499ce4e3b7&q=top-headlines';
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=626e4d22bfaa4e45b57be27eb0d85c42";
  const [loading, setloading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setloading(true);
      const response = await fetch(url);
      const data = await response.json();
      setdata(data.results || data.articles);
      console.log(data.results || data.articles);
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
          {
            data.map((card, index) => (
              <div
                className="flex flex-col h-full shadow-md rounded relative"
                key={index}
              >
                <img
                  src={
                    card.image_url || card.urlToImage
                      ? card.image_url || card.urlToImage
                      : "page-not-found.avif"
                  }
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
            // : "Not Found"
          }
        </div>
      )}
    </main>
  );
};

export default LatestNews;
