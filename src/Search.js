import React from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();

  return (
    <>
      <div class="w-[50px] sm:w-[300px] md:w-[700px] lg:w-[1080px] fixed bg-blue-200 sticky top-0  w-full px-5 py-2 flex justify-between items-center ">
        <span class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          HomePage
        </span>
        <section>
          <h2>Search Your Feverite Movie</h2>
          <form action="#" onSubmit={(e) => e.preventDefault()}>
            <div class="">
              <input
                type="text"
                class="absolute top-1 right-3 h-10 w-19 ... ml-10 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-30 placeholder-slate-40 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
                placeholder="Search Movie Here"
                value={query}
                onChange={(e) => {
                  if (e.target.value == "undefined") {
                    e.target.value="null";
                    console.log(e.target.value);
                  }else{{
                    setQuery(e.target.value);
                    console.log(e.target.value);

                  }}
                }}
              />
            </div>
            <br />
            <br />
          </form>
          <div>
            <p>{isError.show && isError.msg}</p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Search;
