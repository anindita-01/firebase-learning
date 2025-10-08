const Display = ({ movieList }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="bg-blue-950 min-h-screen p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieList.map((movie) => (
              <div
                key={movie.id}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <h1 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                  {movie.title || movie.Title }
                </h1>
                <div className="text-gray-600 text-sm">
                    <p className="mb-1">
                <span className="font-semibold">Duration:</span> {movie.Duration || movie.duration}
              </p>
                  <span className="font-semibold">Language:</span>{" "}
                  {movie.Language || movie.language}
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
