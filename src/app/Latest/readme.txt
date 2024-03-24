<div className="transition ease-in duration-300 grid grid-cols-4 gap-4 px-3 my-3 max-md:grid-cols-1 max-lg:grid-cols-2">
        {latest_news.map((card, index) => (
          <div
            className="flex flex-col h-full shadow-md rounded relative"
            key={index}
          >
            {/* <img
              src={card.urlToImage ? card.urlToImage : "page-not-found.avif"}
              className="h-[100%] w-full rounded border-[1px] border-slate-400"
            /> */}
            <h3>{card.title}</h3>
            <div className="w-[41%] py-3">
              <Link
                href={`/pages/${card.url}`}
                className="bg-yellow-300 py-2 rounded px-2 ml-1"
              >
                Read More
                <i className="bi bi-chevron-double-right mx-2"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>