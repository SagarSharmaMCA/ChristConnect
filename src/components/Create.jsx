import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Create = () => {
  return (
    <div className="w-full flex justify-center h-[170px]">
      <div className="flex flex-row bg-darkblue rounded-2xl items-center gap-x-4">
        <div className="flex ml-4 mb-8">
          <FaUserCircle className="text-6xl text-white" />
        </div>
        <div className="flex flex-col w-full mr-6 gap-y-2">
          <div className="flex w-full mt-4 text-black p-4 bg-white rounded-2xl h-20">
            <input
              type="text"
              placeholder="Write Something!"
              className="w-[400px] rounded-2xl placeholder:text-darkblue focus:outline-none text-dark"
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-blue text-white w-16 h-8 rounded-2xl">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
