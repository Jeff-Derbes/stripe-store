import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <div className=" text-center mt-16 py-16 px-10 flex flex-col items-center gap-8 justify-center">
      <p>2022 JD Shop All rights reserverd</p>
      <p className="flex text-2xl">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
}

export default Footer;
