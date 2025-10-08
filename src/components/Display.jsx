import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";

const Display = ({ movieList, getMovieList }) => {
  //update title state

  const [updatedTitle, setUpdatedTitle] = useState({});

  const handleInputChange = (id, value) => {
    setUpdatedTitle((prev) => ({
      ...prev,
      [id]: value, // only update the input for that movie
    }));
  };

  const handleDelete = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
    getMovieList();
  };

  const handleUpdate = async (id) => {
    try {
      const movieDoc = doc(db, "movies", id);
      await updateDoc(movieDoc, { title: updatedTitle[id] });
      getMovieList();
      // Clear only the updated one
      setUpdatedTitle((prev) => ({ ...prev, [id]: "" }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* read of CRUD */}
      <div className="flex justify-center items-center">
        <div className="bg-blue-950 min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieList.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h1 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                  {movie.title || movie.Title}
                </h1>
                <div className="text-gray-600 text-sm">
                  <p className="mb-1">
                    <span className="font-semibold">Duration:</span>{" "}
                    {movie.Duration || movie.duration}
                  </p>
                  <span className="font-semibold">Language:</span>{" "}
                  {movie.Language || movie.language}
                  {/* delete of CRUD */}
                  <button
                    type="submit"
                    onClick={() => handleDelete(movie.id)}
                    className="group relative w-full flex justify-center py-3 mt-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                  >
                    Delete
                  </button>
                  {/* update of CRUD */}
                  <input
                    className="appearance-none rounded-none relative block w-full px-3 mt-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="new movie name..."
                    type="text"
                    value={updatedTitle[movie.id] }
                    onChange={(e) =>
                      handleInputChange(movie.id, e.target.value)
                    }
                  />
                  <button
                    type="submit"
                    onClick={() => handleUpdate(movie.id)}
                    className="group relative w-full flex justify-center py-3 mt-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
