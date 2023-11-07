import React, { useEffect, useState } from "react";
import CategoryNav from "../components/CategoryNav";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";

const Products = () => {
  const { id } = useParams();
  const [title, setTitle] = useState(null);

  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}`
  );

  useEffect(() => {
    if (data) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [data]);

  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
          <main>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {title} cameras
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {data?.map((product) => {
                return <Product product={product} key={product.id} />;
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
