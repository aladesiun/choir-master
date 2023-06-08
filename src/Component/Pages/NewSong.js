import React, { useState, useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom'

import axios from "axios";
const NewSong = ({ song, update }) => {
  const user = JSON.parse(localStorage.getItem('user') ?? '[]');
  const [toggleCreate, setToggleCreate] = useState(true)
  const navigate = useNavigate();

  const [newSong, setNewSong] = useState({
    title: '',
    song_key: '',
    score: '',
    id: user.id,
    author: ''
  });
  let prevScore = newSong.score;


  const updateIfSong = () => {
    setNewSong(
      song ? {
        title: song.title ?? '',
        song_key: song.song_key ?? '',
        score: song.score ?? '',
        id: user.id,
        author: song.author ?? ''

      } :
        {
          title: '',
          song_key: '',
          score: '',
          id: user.id,
          author: ''

        }
    )
    prevScore = newSong.score;
  }



  const editorRef = useRef(null);
  // check when the song prop changes so you can set the newsong
  useEffect(() => {
    updateIfSong()
  }, [song]);

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
      }));

    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    update ? axios.put(`http://localhost:4400/api/songs/${song.id}/update`, newSong)

      .then((res) => {
        if (res.data.status == 200) {
          setToggleCreate(false);
          window.location.reload();
        }
      })
      .catch((err) => alert(err.response.data.message)) : axios.post("http://localhost:4400/api/songs/create", newSong)

        .then((res) => {
          console.log(res);

          if (res.data.status == 200) {

            setToggleCreate(false);
            setNewSong({
              title: '',
              song_key: '',
              score: 'hellosss',
              id: user.id,
              author: ""
            })
          }
        })
        .catch((err) => alert(err.response.data.message));
  }

  const copyScore = () => {

    console.log(prevScore);
    // Remove HTML tags
    const withoutTags = prevScore.replace(/<[^>]+>/g, '');
    console.log(withoutTags);

    // Focus the document
    document.documentElement.focus();

    // Copy the text to the clipboard
    navigator.clipboard.writeText(withoutTags)
      .then(() => {
        alert("Copied the text: " + withoutTags);
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
      });
  };

  return (
    <div className="my-5">
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center px-6 mx-auto md:min-h-[50vh] lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            {toggleCreate ? <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <div className='flex items-center justify-between'>
                <h1 className="text-xl font-bold leading-tight uppercase tracking-tight text-gray-900 md:text-2xl dark:text-white">

                  {update ? 'Update Your Song' : 'Create  Your Song!'}
                </h1>
                {update && <button
                  type='button'
                  onClick={() => window.location.reload()}
                  className=" w-[100px] my-2 block text-white bg-red-600  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  cancel
                </button>}
              </div>

              {user.length < 1 ?
                <p className='text-center text-red-900 capitalize'>you must be logged in to create/edit a song</p> :
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
                      required
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
                    <label
                      htmlFor="author"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Author
                    </label>
                    <input
                      required
                      value={newSong.author}
                      onChange={handleInput}
                      type="text"
                      name="author"
                      id="author"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                    />
                  </div>
                  {update &&
                    <>
                      <input type='text' className='' defaultValue={prevScore} id='prevScore' />
                      <button onClick={copyScore}
                        type="button"
                        className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        copy previous Score

                      </button>
                    </>
                  }

                  <div>
                    <Editor
                      apiKey='z04rnfohe8q4u1alj8mdf1o25k5xzjdyfk37qd9bwbt2g0oz'

                      // init={editorInitConfig}
                      onEditorChange={e => handleScore(e)}
                      onInit={(evt, editor) => editorRef.current = editor}
                      initialValue={newSong.score}
                      Value={newSong.score}
                      // onKeyUp={e => handleScore(e)}
                      init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                      name="score"

                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    {update ? 'Update' : 'Create'}

                  </button>

                </form>
              }

            </div>
              :
              <div>
                <p className='text-green-500 p-5 text-lg text-center'>Song createed successfully</p>
                <button
                  onClick={() => setToggleCreate(true)}
                  type="submit"
                  className=" mx-auto w-[140px] my-2 block text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {update ? 'Update again' : 'Create new'}
                </button>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewSong;
