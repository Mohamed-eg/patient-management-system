"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { catigoryList } from "@/constants";

function CategoryList() {
  const params = usePathname();
  const category = params.split("/")[2];

 

  return (
    <div className="mt-5 flex flex-col">
      <ul className="">
        {catigoryList.map((item, index) => (
          <li key={index} className="cursor-pointer">
            <Link
              href={"/search/" + item?.value}
              className={`p-2 flex gap-2
                            text-[14px]
                            text-blue-600
                            items-center
                            rounded-md cursor-pointer w-full
                            ${category == item.value && "bg-blue-100"}
                            `}
            >
              <Image src={item?.url} alt="icon" width={25} height={25} />
              <label className="cursor-pointer">{item?.name}</label>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
