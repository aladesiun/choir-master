import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import useFormattedTime from "../composables/useTime";
import parse from 'html-react-parser';
import NewSong from "./Pages/NewSong";
const HomePagesSec = () => {
  const [songDetails, setSongDetails] = useState({});
  const { id } = useParams();
  const [updateToggle, setUpdateToggle] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') ?? "null");
  const format = useFormattedTime(songDetails.created_at);

  const getSong = () => {
    axios
      .get("http://localhost:4400/api/songs/" + id)
      .then((data) => {
        let song = data.data.result;
        setSongDetails(song);
      })
      .catch((err) => alert(err.response.data.message));
  }

  const handleUpdateToggle = () => {
    setUpdateToggle(!updateToggle)
  }

  useEffect(() => {
    getSong();
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-32 px-6">
      <div className="container max-w-5xl m-auto border bg-white dark:bg-gray-800 rounded-lg border-gray-100 dark:border-gray-700 p-6 sm:px-8">
        {!updateToggle &&
          <div className="wrapper text-center m-auto border rounded border-gray-100 dark:border-gray-700 space-x-2 sm:space-x-3 w-full shadow">
           {
            songDetails &&
            <>
            <div className="py-3 pb-12 sm:py-0 sm:pb-0 relative">
              <h1 className="text-lg sm:text-xl font-semibold dark:text-gray-50 text-gray-900 pt-4 uppercase my-3">
                {songDetails.title}
                {songDetails.user_id == user.id ?
                  <button
                    type='button'
                    onClick={handleUpdateToggle}
                    className="absolute right-3 top-0 w-[100px] my-2 block text-white bg-green-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    edit
                  </button> : <></>
                }


              </h1>
              <h4 className="text-xs dark:text-gray-50 text-gray-900 rounded-2xl py-1 font-medium my-3">
                <i className="fas fa-user pr-1"></i>Artist: {songDetails.author}
              </h4>
              <h1 className="text-xs sm:text-sm font-semibold dark:text-gray-50 text-gray-900 my-3">
                <i className="fas fa-clock pr-1"></i>Uploaded: 7 may, 2023 {format}
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
          </>
           }
          </div>

        }

        {updateToggle &&
          <NewSong song={songDetails} update={true} />
        }
      </div>
    </section>
  );
};

export default HomePagesSec;
