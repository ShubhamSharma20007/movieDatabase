import { useEffect, useState } from "react";
import Sidenav from "./components/partials/Sidenav";
import Topnav from "./components/partials/Topnav";
import axios from "./utils/axios"; 
import Header from "./components/partials/Header";

function App() {
  document.title = "Movie App | Home";

  const [wallpaper, setWallpaper] = useState(null);
  const [loading, setLoading] = useState(true);
  const movies = [
    'spiderman', 'hero', 'mercy', 'venom', 'charli', 
    'ironman', 'thor', 'hulk', 'captain america', 'black panther', 'black widow'
  ];

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(
        `?apikey=13194d45&s=${movies[Math.floor(Math.random() * movies.length)]}`
      );
      const randomData = data?.Search[Math.floor(Math.random() * data.Search.length)];
      setWallpaper(randomData);
      setLoading(false); 
    } catch (error) {
      console.log(error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getHeaderWallpaper();
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        <div className="bg-[#1F1E24] h-screen w-full flex">
          <Sidenav />
          <div className="w-[80%] h-full">
            <Topnav />
            <Header data={wallpaper} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
