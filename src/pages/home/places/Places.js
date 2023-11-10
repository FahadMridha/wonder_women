import React, { useState } from "react";
import { sampleData } from "../../../data/sampleData";
import { Link } from "react-router-dom";

const Places = () => {
  const [data, setDate] = useState(sampleData);
  return (
    <>
      <h2 className="text-4xl font-bold lg:text-5xl text-center mt-10">
        Choose your best place
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-20 ">
        {data.map((item) => (
          <div key={item.id}>
            <div
              key={item.id}
              className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100"
            >
              <div className="flex justify-between pb-4 border-bottom">
                <div className="flex items-center">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="mb-0 capitalize dark:text-gray-100"
                  >
                    {item.category}
                  </a>
                </div>
                <Link to="/destination">See All</Link>
              </div>
              <Link to={`/destinationDetails/${item.id}`}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <img
                      src={item.image}
                      alt=""
                      className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                    />
                    <div className="flex items-center text-s">
                      <span>{item.name}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                      <h3 className="text-xl font-semibold dark:text-violet-400">
                        {item.title}
                      </h3>
                    </a>
                    <p className="leading dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Places;
