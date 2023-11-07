import React from "react";
import { FiX } from "react-icons/fi";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories");
  console.log(data);
  return (
    <div className="w-full h-full bg-primary p-8">
      <div
        className="flex justify-end mb-8 cursor-pointer"
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data?.map((category) => {
          return (
            <Link
              to={`products/${category.id}`}
              key={category.id}
              className="uppercase font-medium"
            >
              {category.attributes.title} Cameras
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
