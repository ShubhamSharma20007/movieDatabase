import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../utils/axios";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [search, setSearch] = useState(null);
  const getSearch = async (query) => {
    try {
      const response = await axios.get(`/?apikey=13194d45&s=${query}`);
      const data = response.data;
      setSearch(data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch(query);
  }, [query]);

  return (
    <>
      <div className="w-full h-[10vh] relative flex justify-start pl-[20%] items-center">
        <i class="ri-search-line text-xl text-zinc-400"></i>
        <input
          type="text"
          name="query"
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-[50%] mx-10 p-5 text-md outline-none border-none bg-transparent text-zinc-200"
          id=""
          placeholder="search anything..."
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="ri-close-fill text-lg text-zinc-400"
          ></i>
        )}
        <div className="w-[40%] max-h-[45vh] overflow-y-scroll absolute top-[100%] bg-zinc-200 rounded-md">
          {search &&
            search.map((item, i) => (
              <>
                <Link
                  key={i}
                  className="p-4 hover:text-black hover:bg-zinc-300 duraion-300 font-semibold text-zinc-600 gap-5  w-[100%] flex justify-start items-center border-b-2 border-zinc-100"
                >
                  <img
                    src={item.Poster}
                    onError={(e) => {
                      e.target.src =
                        "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";
                    }}
                   
                    width={50}
                    height={50}
                    className="object-cover rounded-md"
                    alt=""
                  />
                  <span>{item.Title}</span>
                 
                </Link>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Topnav;
