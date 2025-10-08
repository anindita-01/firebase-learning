import { addDoc } from "firebase/firestore";
import { useState } from "react";

const Create = ({ moviesCollectionRef, getMovieList }) => {
  //NEW MOVIE STATES

  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newMovieDuration, setNewMovieDuration] = useState(0);
  const [newMovieLanguage, setNewMovieLanguage] = useState("");

  const onSubmitMovie = async (e) => {
    e.preventDefault();
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        duration: newMovieDuration,
        language: newMovieLanguage,
      });

      getMovieList();

      // --- ADD THESE LINES TO CLEAR THE FORM ---
      setNewMovieTitle("");
      setNewMovieDuration(0);
      setNewMovieLanguage("");
    } catch (err) {
      console.error(err);
    }
  };

  return (


    //  create of CRUD
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
          <form className="mt-8 space-y-6" onSubmit={onSubmitMovie}>
            <div className="rounded-md shadow-sm -space-y-px">
              {/* movie name */}
              <input
                className="appearance-none rounded-none relative block w-full px-3 mt-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="movie name..."
                type="text"
                value={newMovieTitle}
                onChange={(e) => setNewMovieTitle(e.target.value)}
              />
              {/* movie duration */}

              <input
                className="appearance-none rounded-none relative block w-full mt-3 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="movie duratiom..."
                type="number"
                value={newMovieDuration || ""}
                onChange={(e) => setNewMovieDuration(e.target.value)}
              />
              {/* movie lang */}

              <input
                className="appearance-none rounded-none relative block w-full mt-3 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="movie language..."
                type="text"
                value={newMovieLanguage}
                
                onChange={(e) => setNewMovieLanguage(e.target.value)}
              />

              {/* submit button */}

              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 mt-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
