import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const HomePage = () => {
  const [allSongs, setAllSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState("");
  const [fillterString, setFillterString] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // pagination
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const query = () => {
    setIsLoading(true);
    axios
      .post("http://localhost:4400/api/songs/query", { title: searchString, username: fillterString })
      .then((res) => {
        setIsLoading(false);
        setAllSongs(res.data.songs);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  const handleInput = (e) => {
    setSearchString(e.target.value)
    console.log(searchString);
  }

  const getSongs = () => {
    setIsLoading(true);
    axios
      .get('http://localhost:4400/api/songs', {
        params: {
          page: currentPage,
          perPage: 5,
          title: searchString,
        }
      })
      .then((res) => {
        if (res.data.status === 200) {
          setTotalPages(res.data.totalPages);
          setIsLoading(false);
          setAllSongs(res.data.songs);

        }
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message)
      });
  }

  useEffect(() => {
    getSongs();
    console.log(allSongs);

  }, [currentPage, searchString]);


  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-32 px-3 lg:px-6 h-[100vh] overflow-y-scroll">

      <div className="container max-w-5xl m-auto">
        <div className='mb-5 flex'>
          {/* <select name='search' value={fillterString} onChange={(e)=> setFillterString(e.target.value)} className="p-2 max-w-[125px] text-sm text-gray-900 border rounded-r-none border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option  className='text-gray-600 dark:text-gray-300 font-black' value=' '>By:</option>
                <option value="title">Title</option>
                <option value="username">Username</option>
              </select> */}
          <div className="relative block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input value={searchString} onChange={handleInput} placeholder={"by " + " " + fillterString} type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
        </div>
      </div>
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
        <div className="container max-w-5xl m-auto mb-9">
          <ul className=" border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 px-3 p-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
            {allSongs.map((song, index) => (
              <li key={index}>
                <Link to={`/song/${song.id}`} className="wrapper m-auto hover:shadow-lg border rounded border-gray-100 dark:border-gray-700 relative flex justify-between space-x-2 sm:space-x-3 w-full shadow p-3">
                  <div className="">
                    <h1 className="text-base sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4">
                      {song.title}
                    </h1>
                    <h1 className="text-[11px] sm:text-sm font-semibold dark:text-gray-50 text-gray-900">
                      <i className="fas fa-clock pr-1"></i> 5 min ago
                    </h1>
                    <h4 className=" my-3 text-[9px] sm:text-xs right-2 bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900 rounded-2xl p-3 py-1 font-medium ">
                      <i className="fas fa-user pr-1"></i>By Alec Benjamin
                    </h4>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="container max-w-5xl m-auto flex justify-between">
        <button onClick={handlePrevPage} disabled={currentPage === 1} className="inline-flex items-center px-4 py-2  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
          Previous
        </button>
        <div>
          {currentPage} of {totalPages}
        </div>
        <button onClick={handleNextPage} disabled={currentPage === totalPages} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
          <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>

    </section>
  );
};

export default HomePage;
