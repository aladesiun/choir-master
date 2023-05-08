import React, {useState, useRef} from 'react';
import { Editor }  from '@tinymce/tinymce-react';
import axios from "axios";
const NewSong = () => {
    const [newSong, setNewSong] = useState({
        title: '',
        song_key: '',
        score: 'hellosss',
    });
    
    const user = JSON.parse(localStorage.getItem('user') ?? '[]');
    const editorRef = useRef(null);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setNewSong({ ...newSong, [name]: value });
        console.log(newSong);
      };
    
      const handleScore = () => {
        if (editorRef.current) {
            let desc = editorRef.current.getContent();
            setNewSong((prevState) => ({
                ...prevState,
                score: desc
            }))
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:4400/api/songs/create", newSong)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    }
  return (
    <div className="my-5">
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:min-h-[50vh] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight uppercase tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create  Your Song!
              </h1>

              {user.length < 1 ?
              <p className='text-center text-red-900 capitalize'>you must be logged in to create a song</p>:  <form
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
                  value={newSong.title}
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
                ref={editorRef}
                  value={newSong.song_key}
                  onChange={handleInput}
                  type="text"
                  name="song_key"
                  id="song_key"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                />
              </div>
               <div>
                  <Editor 
                    onKeyUp={e => handleScore()}
                    onInit={(evt, editor) => editorRef.current = editor}
                    // initialValue={newSong.score ?? ''}
                    Value={newSong.score}
                  // onChange={(e) => setNewSong((prev) => ({ ...prev, score: e.target.value }))}
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSong;
