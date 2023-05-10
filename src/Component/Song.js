import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useFormattedTime from "../composables/useTime";
import parse from 'html-react-parser';
const HomePagesSec = () => {
  const [songDetails, setSongDetails] = useState({});
  const { id } = useParams();

  const getSong = ()=>{
    axios
    .get("http://localhost:4400/api/songs/"+id)
    .then((data) => {
      let song = data.data.result;
      setSongDetails(song);
    })
    .catch((err) => alert(err.response.data.message));
  }

  useEffect(() => {
    getSong();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32 px-6">
      <div className="container max-w-5xl m-auto border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 p-6 sm:px-8">
        {
          <div className="wrapper text-center m-auto border rounded border-gray-100 dark:border-gray-700 space-x-2 sm:space-x-3 w-full shadow">
            <div className="py-3 pb-12 sm:py-0 sm:pb-0">
              <h1 className="text-lg sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4 uppercase my-3">
                {songDetails.title}
              </h1>
              <h4 className="text-xs dark:text-gray-50 text-gray-900 rounded-2xl py-1 font-medium my-3">
                <i className="fas fa-user pr-1"></i>Artist: {songDetails.author}
              </h4>
              <h1 className="text-xs sm:text-sm font-semibold dark:text-gray-50 text-gray-900 my-3">
                <i className="fas fa-clock pr-1"></i>Uploaded: 7 may, 2023 {useFormattedTime(songDetails.created_at)}
              </h1>
              <h1 className="text-xs sm:text-sm font-semibold dark:text-gray-50 text-gray-900">
                <i className="fas fa-clock pr-1"></i>Key: {songDetails.song_key}
              </h1>
            </div>
            <div>
              <h1 className="text-bold text-xl sm:text-[40px] my-5">score :</h1>
              {/* {songDetails.score}  */}
              <div>{parse(`${songDetails.score}`)}</div>
              
              
            
            </div>
          </div>
        }
      </div>
    </section>
  );
};

export default HomePagesSec;
