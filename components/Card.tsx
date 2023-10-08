import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";
import Image from "next/image";
import { BsTrash3 } from "react-icons/bs";

const Card: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white border rounded-md max-w-md relative">
        <button
          id="delete"
          className="absolute right-2 p-2 rounded-full hover:bg-red-500 top-2"
        >
          <BsTrash3 size={25} className="hover:fill-white" />
        </button>
        <div className="flex items-center px-4 py-3">
          <img
            className="h-8 w-8 rounded-full"
            src="https://th.bing.com/th/id/OIP.uypTEU9uX7OgNlOI9dp-NwHaHa?pid=ImgDet&rs=1"
          />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">
              nikola.mirilo
            </span>
            <span className="text-gray-600 text-xs block">Belgrade</span>
          </div>
        </div>
        <div
          className="relative"
          style={{
            height: "250px",
            width: "350px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Image
            src="https://www.androidcentral.com/sites/androidcentral.com/files/styles/w1600h900crop_wm_brw/public/article_images/2021/01/samsung-galaxy-s21-series-2.jpg"
            fill
            style={{ objectFit: "cover" }}
            alt="Naslov"
          />
        </div>
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5">
            <button id="like">
              <AiOutlineHeart size={30} />
            </button>
            <button id="comment">
              <FaRegComment size={25} />
            </button>
            <button id="share">
              <FiSend size={30} />
            </button>
          </div>
          <div className="flex">
            <button id="save">
              <BiBookmark size={30} />
            </button>
          </div>
        </div>

        <div className="mx-4 mt-2 mb-4">
          <div className="font-semibold text-md">Lorem Ipsum</div>
          <div className="font-normal text-md">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen{" "}
          </div>
        </div>

        <div className="font-semibold text-sm mx-4 mt-2 mb-4 w-11/12 flex flex-row justify-end">
          127 likes
        </div>
      </div>
    </div>
  );
};

export default Card;
