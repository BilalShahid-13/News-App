import React from "react";

const page = () => {
  return (
    <main className="mx-2 flex flex-col gap-5 justify-center select-none">
      <h1 className="flex justify-center items-center text-2xl mt-2 uppercase">
        Welcome to News App – your go-to source for the latest top headlines
        from around the world
      </h1>
      <p className="text-xl"> 
        At News App, we pride ourselves on delivering up-to-date news coverage
        on a variety of topics, ensuring that you stay informed and connected to
        the events shaping our world today.
      </p>
      <p>
        Our website provides a curated selection of top headlines spanning
        various categories, including:
      </p>
      <ul className='list-disc mx-5 leading-10'>
        <li className="flex flex-row">
          <h4 className="font-semibold">Gaming:&nbsp;</h4>
          <p>
            Stay updated on the latest developments in the gaming industry, from
            new releases to esports tournaments.
          </p>
        </li>
        <li className="flex flex-row">
          <h4 className="font-semibold">Entertainment:&nbsp;</h4>
          <p>
            Explore the world of entertainment with news on movies, music, TV
            shows, and celebrity updates.
          </p>
        </li >
        <li className="flex flex-row">
          <h4 className="font-semibold">Sports:&nbsp;</h4>
          <p>
            Follow your favorite sports teams and athletes, get live scores, and
            stay informed about major sporting events.
          </p>
        </li>
        <li className="flex flex-row">
          <h4 className="font-semibold">Business:&nbsp;</h4>
          <p>
            Keep track of the latest business news, market trends, and financial
            developments that impact global economies.
          </p>
        </li>
      </ul>
      <p className="leading-8">
        In addition to our comprehensive news coverage, we have exciting plans
        for the future! We are working on implementing a database feature that
        will allow you to save your favorite news articles for easy access
        later. Whether it's an insightful opinion piece, breaking news, or a
        heartwarming feature story, you'll be able to bookmark and revisit your
        favorite articles at any time.
      </p>
      {/* footer */}
      <p className="text-xl">
        Thank you for choosing News App as your trusted source for news and
        information. Stay tuned for more updates and enhancements as we continue
        to evolve and improve our platform to better serve you!
      </p>
    </main>
  );
};

export default page;
