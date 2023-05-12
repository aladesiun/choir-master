import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import axios from "axios";
import { useParams } from "react-router-dom";


const EditSong = () => {
  const user = JSON.parse(localStorage.getItem('user') ?? '[]');
  const [toggleCreate, setToggleCreate] = useState(true)
  const { id } = useParams();


  const [editSong, setEditSong] = useState({
    title: '',
    song_key: '',
    score: 'hellosss',
    id: user.id,
    author:""

  });

  const getSong = ()=>{
    axios
    .get("http://localhost:4400/api/songs/"+id)
    .then((data) => {
      let song = data.data.result;
      setEditSong(song);
    })
    .catch((err) => alert(err.response.data.message));
  }

  useEffect(() => {
    getSong();
  }, []);

  const editorRef = useRef(null);


  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditSong({ ...editSong, [name]: value });
    console.log(editSong);
  };

  const handleScore = () => {
    if (editorRef.current) {
      let desc = editorRef.current.getContent();
      setEditSong((prevState) => ({
        ...prevState,
        score: desc
      }))
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4400/api/songs/create", editSong)
      .then((res) => {
        if (res.data.status == 200) {
          setToggleCreate(false);
          setEditSong({
            title: '',
            song_key: '',
            score: 'hellosss',
            id: user.id,
            author:""
          })
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="my-5">
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:min-h-[50vh] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          {toggleCreate ?   <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight uppercase tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create  Your Song!
              </h1>

              {user.length < 1 ?
                <p className='text-center text-red-900 capitalize'>you must be logged in to create a song</p> :
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                  action="#"
                >
                  <div>
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TItle
                    </label>
                    <input
                      required
                      value={editSong.title}
                      onChange={handleInput}
                      type="text"
                      name="title"
                      id="title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="song_key"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Song Key
                    </label>
                    <input
                      required
                      ref={editorRef}
                      value={editSong.song_key}
                      onChange={handleInput}
                      type="text"
                      name="song_key"
                      id="song_key"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="author"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Author
                    </label>
                    <input
                      required
                      value={editSong.author}
                      onChange={handleInput}
                      type="text"
                      name="author"
                      id="author"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                  <div>
                    <Editor
                      onKeyUp={e => handleScore()}
                      onInit={(evt, editor) => editorRef.current = editor}
                      // initialValue={editSong.score ?? ''}
                      Value={editSong.score}
                      // onChange={(e) => setEditSong((prev) => ({ ...prev, score: e.target.value }))}
                      name="score"

                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create
                  </button>

                </form>
              }

            </div>
            :
            <div>
                <p className='text-green-500 p-5 text-lg text-center'>Song createed successfully</p>
                <button
                onClick={()=>setToggleCreate(true)} 
                    type="submit"
                    className=" mx-auto w-[140px] my-2 block text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create new
                  </button>
            </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditSong;
