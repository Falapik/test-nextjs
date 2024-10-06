"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/product");
      const data = await response.json();
      console.log(response);

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="h-[806px] w-full bg-white flex">
      {products.map((product) => (
        <div key={product.id} className="mt-5 mb-0 ml-12 px-7 py-7">
          <div className="text-black font-sans font-medium text-[40px] tracking-[-0.01em] w-[428px]">
            {product.name}
          </div>
          <div className="font-medium text-[20px] tracking-[0.01em] text-black w-[271px]">
            {product.description}
          </div>
          <div className="">
            <Image
              src={product.image}
              width={496}
              height={496}
              alt={product.name}
            />
          </div>
          <div className="flex items-center justify-between w-[500px]">
            <div className="font-bold text-4xl tracking-tight text-black">
              {product.price}
            </div>
            <button className="bg-[#600027] rounded-[52px] w-[157px] h-[63px] text-[25px] translate-x-[-20px]">
              Купить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
