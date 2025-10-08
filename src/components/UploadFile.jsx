import { useState } from "react";
import { storage } from "../config/firebase";

const UploadFile = () => {

    const [fileUpload, setFileUpload]= useState(null);

    const handleUpload= async()=>{
        if(!fileUpload) return;
        //incomplete cuz firebase storage wouldn't work on the location I provided *sad face*

    }
  return (
    <>
      <div>
        <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
          <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-2xl shadow-lg">
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                
                <input
                  className="appearance-none rounded-none relative block w-full px-3 mt-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="uploade files here..."
                  type="file"
                  // value={newMovieTitle}
                  onChange={(e) => setFileUpload(e.target.files[0])}
                />
              </div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 mt-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-300"
                onClick={handleUpload}
              >
                upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadFile;
