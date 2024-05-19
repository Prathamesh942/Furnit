import React from "react";

const data = [
  {
    cover: "",
    title: "Why should you choose good wood",
    date: "December 10, 2023",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    cover: "",
    title: "Why should you choose good wood",
    date: "December 10, 2023",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
  {
    cover: "",
    title: "Why should you choose good wood",
    date: "December 10, 2023",
    info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  },
];

const Readourblogs = () => {
  return (
    <div className=" flex flex-col gap-5 justify-between items-center py-10">
      <h3 className=" text-3xl font-semibold">Read our latest blogs</h3>
      <p className=" w-[70vw] text-center">
        We write various things related to furniture, from tips and what things
        I need to pay attention to when choosing furniture
      </p>
      <div className=" flex">
        <div className=" flex justify-between max-md:flex-col">
          {data.map((blog) => {
            return (
              <div className=" w-[30%] flex flex-col gap-4 max-md:w-[100%]">
                <img
                  className=" aspect-square"
                  src="assets\img_rectangle18.png"
                  alt=""
                />
                <h2 className=" text-xl font-semibold">{blog.title}</h2>
                <span className=" flex">
                  <img src="assets\img_calendar.svg" alt="" />
                  {blog.date}
                </span>
                <p>{blog.info}</p>
                <button className=" w-[60%] border-2 border-black p-2 font-semibold">
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Readourblogs;
