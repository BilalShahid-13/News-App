import React from "react";

const page = ({ params }) => {
  let arr = params.id;
  arr[0] = "https://";
  const id = arr.join("/");
  return (
    <>
      <iframe src={id} className="w-full h-screen"></iframe>
    </>
  );
};

export default page;
