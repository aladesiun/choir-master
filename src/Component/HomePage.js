import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const HomePage = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4400/api/songs/")
      .then((res) => {
        console.log(res.data.songs);
        setAllSongs(res.data.songs);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32 px-3 lg:px-6">
      <div>
        {isLoading ? (
          <ul
            id="skeleton-loader"
            className="container max-w-5xl m-auto border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 px-3 p-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8"
          >
            <li>
              <div className="wrapper m-auto hover:shadow-lg border rounded border-gray-100 dark:border-gray-700 relative flex space-x-2 sm:space-x-3 w-full shadow">
                <div className="img skeleton skeleton-img"></div>
                <div className="my-5 pb-12 sm:py-0 sm:pb-0">
                  <div className="text-base sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4 skeleton skeleton-title"></div>
                  <div className="text-[11px] sm:text-sm font-semibold dark:text-gray-50 text-gray-900 skeleton skeleton-text"></div>
                  <div className="absolute my-3 text-[9px] sm:text-xs right-2 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 rounded-2xl p-3 py-1 font-medium skeleton skeleton-id"></div>
                </div>
              </div>
            </li>
            <li>
              <div className="wrapper m-auto hover:shadow-lg border rounded border-gray-100 dark:border-gray-700 relative flex space-x-2 sm:space-x-3 w-full shadow">
                <div className="img skeleton skeleton-img"></div>
                <div className="my-5 pb-12 sm:py-0 sm:pb-0">
                  <div className="text-base sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4 skeleton skeleton-title"></div>
                  <div className="text-[11px] sm:text-sm font-semibold dark:text-gray-50 text-gray-900 skeleton skeleton-text"></div>
                  <div className="absolute my-3 text-[9px] sm:text-xs right-2 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 rounded-2xl p-3 py-1 font-medium skeleton skeleton-id"></div>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <ul className="container max-w-5xl m-auto border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 px-3 p-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {allSongs.map((song, index) => (
              <li key={index}>
                <Link to={`/song/${song.id}`}>
                  <div className="wrapper m-auto hover:shadow-lg border rounded border-gray-100 dark:border-gray-700 relative flex space-x-2 sm:space-x-3 w-full shadow">
                    <div className="img">
                      <img
                        className="w-full h-full object-cover"
                        src="img/music.Png"
                        alt="image"
                      ></img>
                    </div>
                    <div className="py-3 pb-12 sm:py-0 sm:pb-0">
                      <h1 className="text-base sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4">
                        {song.title}
                      </h1>
                      <h1 className="text-[11px] sm:text-sm font-semibold dark:text-gray-50 text-gray-900">
                        <i className="fas fa-clock pr-1"></i> 5 min ago
                      </h1>
                      <h4 className="absolute my-3 text-[9px] sm:text-xs right-2 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 rounded-2xl p-3 py-1 font-medium ">
                        <i className="fas fa-user pr-1"></i>By Alec Benjamin
                      </h4>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HomePage;
