import React from "react";

const page = () => {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-semibold text-2xl py-4">About Bilal Shahid</h1>
      <div className="w-full flex justify-center items-center py-3 drop-shadow-2xl">
        <img
          src="about.jpg"
          className="w-1/4 rounded-full bg-cover border-[1px] broder-zinc-800 shadow-md transition ease-in duration-300 "
        />
      </div>
      <p className="font-medium text-xl">Hello and welcome to my News App!</p>
      <p className="leading-10 text-center">
        I'm Bilal Shahid, a computer science student currently in my 6th
        semester at Superior University. Passionate about technology and its
        applications, I embarked on a journey to create something meaningful.
        That's where the idea for this News App was born.
      </p>
      <p className="leading-10 text-center">
        Built from scratch with dedication and determination, this app is a
        testament to my commitment to innovation and excellence. From
        conceptualization to development, I've been involved in every step of
        the process, ensuring that every feature is designed with you in mind.
      </p>
      <p className="leading-10 text-center">
        n a world inundated with information, staying informed is more important
        than ever. That's why I created this app – to provide a reliable source
        of news and insights across various domains. Whether it's politics,
        technology, sports, or entertainment, my goal is to keep you informed
        and engaged with the world around you.
      </p>
      <p className="leading-10 text-center">
        As a solo developer, I take great pride in what I've accomplished, but I
        also recognize that there's always room for improvement. Your feedback
        and suggestions are invaluable to me as I continue to refine and enhance
        this app.
      </p>
      <p className="leading-10 text-center">
        Thank you for choosing my News App. I'm honored to have you on this
        journey with me, and I'm excited to continue delivering quality news and
        information to you.
      </p>
    </main>
  );
};

export default page;
